import express from 'express';
import cors from 'cors';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 1337;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));
app.use(express.static(path.join(__dirname, 'public')));

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'public/uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// Data file path
const dataFilePath = path.join(__dirname, 'data.json');

// Initialize data file if it doesn't exist
if (!fs.existsSync(dataFilePath)) {
  const initialData = {
    pages: [
      {
        id: 1,
        attributes: {
          title: "Domov",
          slug: "home",
          content: "<h1>Vitajte na našej stránke</h1><p>Toto je hlavná stránka vašej webovej aplikácie.</p>",
          image: null,
          publishedAt: new Date().toISOString(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      },
      {
        id: 2,
        attributes: {
          title: "Podmienky používania",
          slug: "terms",
          content: "<h1>Podmienky používania</h1><p>Zadajte tu vaše podmienky používania.</p>",
          image: null,
          publishedAt: new Date().toISOString(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      },
      {
        id: 3,
        attributes: {
          title: "GDPR",
          slug: "gdpr",
          content: "<h1>Ochrana osobných údajov</h1><p>Informácie o spracovaní osobných údajov.</p>",
          image: null,
          publishedAt: new Date().toISOString(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      },
      {
        id: 4,
        attributes: {
          title: "Prevádzkový poriadok",
          slug: "operating-rules",
          content: "<h1>Prevádzkový poriadok</h1><p>Zadajte tu váš prevádzkový poriadok.</p>",
          image: null,
          publishedAt: new Date().toISOString(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      }
    ]
  };
  fs.writeFileSync(dataFilePath, JSON.stringify(initialData, null, 2));
}

// Helper functions
function readData() {
  const data = fs.readFileSync(dataFilePath, 'utf8');
  return JSON.parse(data);
}

function writeData(data) {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}

// Routes

// Get all pages
app.get('/api/pages', (req, res) => {
  const data = readData();
  const { filters } = req.query;

  let pages = data.pages;

  // Filter by slug if provided
  if (filters) {
    try {
      const parsedFilters = JSON.parse(decodeURIComponent(filters));
      if (parsedFilters.slug && parsedFilters.slug.$eq) {
        pages = pages.filter(p => p.attributes.slug === parsedFilters.slug.$eq);
      }
    } catch (e) {
      // Simple slug filter format
      const slugMatch = req.url.match(/filters\[slug\]\[\$eq\]=([^&]+)/);
      if (slugMatch) {
        const slug = decodeURIComponent(slugMatch[1]);
        pages = pages.filter(p => p.attributes.slug === slug);
      }
    }
  }

  res.json({
    data: pages,
    meta: {
      pagination: {
        page: 1,
        pageSize: 25,
        pageCount: 1,
        total: pages.length
      }
    }
  });
});

// Get single page
app.get('/api/pages/:id', (req, res) => {
  const data = readData();
  const page = data.pages.find(p => p.id === parseInt(req.params.id));

  if (!page) {
    return res.status(404).json({ error: 'Page not found' });
  }

  res.json({ data: page });
});

// Create page
app.post('/api/pages', (req, res) => {
  const data = readData();
  const newId = Math.max(...data.pages.map(p => p.id), 0) + 1;

  const newPage = {
    id: newId,
    attributes: {
      ...req.body.data,
      publishedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  };

  data.pages.push(newPage);
  writeData(data);

  res.status(201).json({ data: newPage });
});

// Update page
app.put('/api/pages/:id', (req, res) => {
  const data = readData();
  const pageIndex = data.pages.findIndex(p => p.id === parseInt(req.params.id));

  if (pageIndex === -1) {
    return res.status(404).json({ error: 'Page not found' });
  }

  data.pages[pageIndex].attributes = {
    ...data.pages[pageIndex].attributes,
    ...req.body.data,
    updatedAt: new Date().toISOString()
  };

  writeData(data);

  res.json({ data: data.pages[pageIndex] });
});

// Delete page
app.delete('/api/pages/:id', (req, res) => {
  const data = readData();
  const pageIndex = data.pages.findIndex(p => p.id === parseInt(req.params.id));

  if (pageIndex === -1) {
    return res.status(404).json({ error: 'Page not found' });
  }

  const deletedPage = data.pages[pageIndex];
  data.pages.splice(pageIndex, 1);
  writeData(data);

  res.json({ data: deletedPage });
});

// Upload file
app.post('/api/upload', upload.single('files'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const fileData = {
    id: Date.now(),
    name: req.file.filename,
    alternativeText: req.body.alternativeText || '',
    caption: req.body.caption || '',
    width: null,
    height: null,
    formats: null,
    hash: req.file.filename,
    ext: path.extname(req.file.originalname),
    mime: req.file.mimetype,
    size: req.file.size / 1000, // Convert to KB
    url: `/uploads/${req.file.filename}`,
    previewUrl: null,
    provider: 'local',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  res.json([fileData]);
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Simple CMS Backend is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Simple CMS Backend running on http://localhost:${PORT}`);
  console.log(`📝 API available at http://localhost:${PORT}/api`);
  console.log(`📂 Data stored in: ${dataFilePath}`);
});
