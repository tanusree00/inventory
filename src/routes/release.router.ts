import { Router} from "express";
import { releaseProducts } from "../controllers/release.controller";
import { productModel } from "../models/product";

const release = Router();

release.post('/release', releaseProducts);

// Inventory report with filters
release.get('/report', async (req, res) => {
    const { startDate, endDate, minPrice, maxPrice, batchNo } = req.query;
    let filters: any = {};
  
    if (startDate || endDate) {
      filters.addedDate = {};
      if (startDate) filters.addedDate.$gte = new Date(startDate as string);
      if (endDate) filters.addedDate.$lte = new Date(endDate as string);
    }
  
    if (minPrice || maxPrice) {
      filters.unitPrice = {};
      if (minPrice) filters.unitPrice.$gte = parseFloat(minPrice as string);
      if (maxPrice) filters.unitPrice.$lte = parseFloat(maxPrice as string);
    }
  
    if (batchNo) filters.batchNo = batchNo;
  
    try {
      const report = await productModel.find(filters);
      res.status(200).json(report);
    } catch (err:any) {
      res.status(500).send(err.message);
    }
  });
  
  export default release;