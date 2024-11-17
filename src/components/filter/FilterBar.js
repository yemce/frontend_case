import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import 
{ TextField, Select, 
  MenuItem, FormControlLabel,
  FormControl, Checkbox, 
  InputAdornment, Box,InputLabel} 
  from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import './FilterBar.css'; // Stil dosyasını import ettik

export default function FilterBar() {
  const { filters, setFilters } = useContext(AppContext);

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters({
      ...filters,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="filter-sidebar">

      {/* Arama Çubuğu */}
      <div>
        <TextField
          label="Ürün, Kategori..."
          variant="outlined"
          fullWidth
          name="searchQuery"
          value={filters.searchQuery || ''}
          onChange={handleFilterChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>

      {/* Fiyat Aralığı */}
      <div>
        <Box mb={2}>
          <TextField
            label="Min Fiyat"
            variant="outlined"
            type="number"
            name="minPrice"
            value={filters.priceRange[0]}
            onChange={(e) =>
              setFilters({ ...filters, priceRange: [Number(e.target.value), filters.priceRange[1]] })
            }
            inputProps={{ min: 0 }}
            fullWidth
          />
        </Box>

        <Box mb={2}>
          <TextField
            label="Max Fiyat"
            variant="outlined"
            type="number"
            name="maxPrice"
            value={filters.priceRange[1]}
            onChange={(e) =>
              setFilters({ ...filters, priceRange: [filters.priceRange[0], Number(e.target.value)] })
            }
            inputProps={{ min: 0 }}
            fullWidth
          />
        </Box>
      </div>

      {/* Puanlama */}
      <div>
        <FormControl variant="outlined" fullWidth>
          <InputLabel>Min Puan</InputLabel>
          <Select
            label="Min Puan"
            name="rating"
            value={filters.rating}
            onChange={handleFilterChange}
          >
            <MenuItem value={0}>0+</MenuItem>
            <MenuItem value={1}>1+</MenuItem>
            <MenuItem value={2}>2+</MenuItem>
            <MenuItem value={3}>3+</MenuItem>
            <MenuItem value={4}>4+</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* İndirimli Ürünler */}
      <div>
        <FormControlLabel
          control={
            <Checkbox
              checked={filters.discount}
              onChange={handleFilterChange}
              name="discount"
            />
          }
          label="İndirimli Ürünler"
        />
      </div>

    </div>
  );
}
