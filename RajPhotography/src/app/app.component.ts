import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PortfolioItem {
  category: string;
  imageUrl: string;
  title: string;
}

interface Service {
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule]
})
export class AppComponent {
  title = 'Raj Photography';
  isMenuOpen = false;
  activeFilter = 'All';

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollTo(event: Event, sectionId: string): void {
    event.preventDefault();
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
    }
    // Use a small timeout to allow mobile menu to start closing before scroll
    setTimeout(() => {
      const element = document.querySelector(`#${sectionId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }

  services: Service[] = [
    {
      title: 'Wedding Photography',
      description: 'We capture the entire story of your wedding day, from the intimate moments to the grand celebrations, preserving every laugh, tear, and dance in stunning detail.',
      imageUrl: 'https://images.pexels.com/photos/11652315/pexels-photo-11652315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Bridal Photography',
      description: 'A session dedicated to the bride. We focus on capturing your elegance, beauty, and the intricate details of your attire in a series of breathtaking portraits.',
      imageUrl: 'https://images.pexels.com/photos/32726997/pexels-photo-32726997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Pre-Wedding Shoots',
      description: 'Tell your unique love story with a creative and romantic pre-wedding photoshoot. We work with you to choose locations and concepts that reflect your personality as a couple.',
      imageUrl: 'https://images.pexels.com/photos/1024989/pexels-photo-1024989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Post-Wedding Shoots',
      description: 'Relax and relive the magic after the main event. A post-wedding shoot allows for creative photos in a stress-free environment, capturing the afterglow of your union.',
      imageUrl: 'https://images.pexels.com/photos/2532215/pexels-photo-2532215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Cinematic Videography',
      description: 'We create a beautiful, movie-like highlight film of your wedding day. Using high-end equipment and storytelling techniques, we craft a visual narrative you\'ll cherish forever.',
      imageUrl: 'https://images.pexels.com/photos/33022972/pexels-photo-33022972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Events Photography',
      description: 'From sangeet nights and mehndi ceremonies to receptions and anniversaries, we cover all your special events with a keen eye for detail and candid moments.',
      imageUrl: 'https://images.pexels.com/photos/31733586/pexels-photo-31733586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
  ];

  blogPosts = [
    { title: 'A Regal Rajasthani Wedding Affair', date: 'July 15, 2024', imageUrl: 'https://images.pexels.com/photos/1035665/pexels-photo-1035665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', excerpt: 'Capturing the vibrant colors and beautiful traditions of Priya and Rohan\'s stunning wedding celebration.' },
    { title: 'Top 5 Locations for Pre-Wedding Shoots in India', date: 'June 28, 2024', imageUrl: 'https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', excerpt: 'Get inspired for your own engagement session with these creative and romantic photo ideas.' },
    { title: 'The Art of Cinematic Wedding Films', date: 'June 10, 2024', imageUrl: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', excerpt: 'Beyond photos, a cinematic film tells the story of your day in a way that nothing else can.' },
  ];

  // Portfolio Data
  portfolioCategories = ['All', 'Indian Wedding', 'Pre-Wedding', 'Fashion', 'Events'];

  allPortfolioItems: PortfolioItem[] = [
    { category: 'Indian Wedding', imageUrl: 'https://images.pexels.com/photos/14899281/pexels-photo-14899281.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', title: 'Sacred Vows' },
    { category: 'Pre-Wedding', imageUrl: 'https://images.pexels.com/photos/16189091/pexels-photo-16189091/free-photo-of-a-man-and-a-woman-are-standing-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', title: 'Golden Hour' },
    { category: 'Fashion', imageUrl: 'https://images.pexels.com/photos/15786696/pexels-photo-15786696.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', title: 'Bridal Elegance' },
    { category: 'Events', imageUrl: 'https://images.pexels.com/photos/11831252/pexels-photo-11831252.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', title: 'Haldi Rituals' },
    { category: 'Indian Wedding', imageUrl: 'https://images.pexels.com/photos/12447605/pexels-photo-12447605.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', title: 'Joyful Moments' },
    { category: 'Pre-Wedding', imageUrl: 'https://images.pexels.com/photos/13083372/pexels-photo-13083372.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', title: 'Lakeside Love' },
    { category: 'Indian Wedding', imageUrl: 'https://images.pexels.com/photos/10245367/pexels-photo-10245367.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', title: 'Intricate Details' },
    { category: 'Fashion', imageUrl: 'https://images.pexels.com/photos/11995751/pexels-photo-11995751.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', title: 'Groom Style' },
    { category: 'Events', imageUrl: 'https://images.pexels.com/photos/13083364/pexels-photo-13083364.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', title: 'Celebration' },
    { category: 'Pre-Wedding', imageUrl: 'https://images.pexels.com/photos/12173998/pexels-photo-12173998.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', title: 'Royal Romance' },
    { category: 'Indian Wedding', imageUrl: 'https://images.pexels.com/photos/15786690/pexels-photo-15786690/free-photo-of-indian-bride-and-groom-in-traditional-wedding-attire.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', title: 'Couple Portrait' },
    { category: 'Fashion', imageUrl: 'https://images.pexels.com/photos/16189088/pexels-photo-16189088/free-photo-of-a-woman-in-a-red-sari-is-posing-for-a-picture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', title: 'Sari Spotlight' },
  ];

  get filteredPortfolio(): PortfolioItem[] {
    if (this.activeFilter === 'All') {
      return this.allPortfolioItems;
    }

    return this.allPortfolioItems.filter(
      (item: PortfolioItem) => item.category === this.activeFilter
    );
  }

  setFilter(category: string): void {
    this.activeFilter = category;
  }

}
