import { Component, OnInit } from '@angular/core';
import { Hotel } from '../models/Hotel';
import { Region } from '../models/Region'; 
import { HotelService } from '../services/HotelService';
import { RegionService } from '../services/RegionService'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  hotels: Hotel[] = [];
  regions: Region[] = []; // Array to store regions
  searchRegion: string = '';
  filteredRegions: Region[] = [];


  constructor(
    private router: Router ,
    private hotelService: HotelService,
    private regionService: RegionService // Inject RegionService
  ) { }

  ngOnInit(): void {
    // Fetch hotels
    this.hotelService.getHotels().subscribe(
      (hotels: Hotel[]) => {
        this.hotels = hotels;
      },
      (error) => {
        console.error('Error fetching hotels:', error);
      }
    );

    // Fetch regions
    this.regionService.getRegions().subscribe(
      (regions: Region[]) => {
        this.regions = regions;
      },
      (error) => {
        console.error('Error fetching regions:', error);
      }
    );
  }
 // Method to filter regions based on user input
 filterRegions(): void {
  this.filteredRegions = this.regions.filter(region =>
    region.name.toLowerCase().includes(this.searchRegion.toLowerCase())
  );
}

// Method to handle region selection
selectRegion(region: Region): void {
  this.searchRegion = region.name;
  this.filteredRegions = []; // Clear suggestions after selection
}

search(): void {
  if (this.searchRegion.trim() !== '') {
      // Navigate to the TopSearchComponent with the searchRegion as a parameter
      this.router.navigate(['/topsearch'], { queryParams: { region: this.searchRegion } });
  } else {
      console.log('Please enter a valid search region');
  }
}
navigateToHotelDetail(hotelId: number) {
  this.router.navigate(['/hoteldetail', hotelId]);
}

filterStarNumber() {

  }
}