# Inventory and Data Management System

## Setup
1. `npm install`
2. Copy `.env.example` to `.env` and set `MONGO_URI`
3. `npm start` (or `npm run dev`)

## Endpoints
| Method | URL | Purpose |
|---|---|---|
| POST | /api/products | Create product |
| GET | /api/products | List (filter, sort, paginate) |
| GET | /api/products/:id | Single product |
| PUT | /api/products/:id | Update details |
| PATCH | /api/products/:id/stock | `{ "change": 10 }` restock, `{ "change": -3 }` sale |
| DELETE | /api/products/:id | Delete |
| GET | /api/products/low-stock | quantity <= reorderLevel |
| GET | /api/products/summary | Category-wise aggregation |

## Query params for GET /api/products
`category`, `supplier`, `search`, `minPrice`, `maxPrice`, `inStock=true`,
`sort=-price,name` (name, price, quantity, category, createdAt), `page`, `limit`

Example: `/api/products?category=Electronics&minPrice=500&sort=-price&page=1&limit=5`
