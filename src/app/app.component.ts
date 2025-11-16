import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  imports: [CommonModule, FormsModule]
})
export class AppComponent {
  title = 'Raj Photography';
  isMenuOpen = false;
  activeFilter = 'All';
  currentYear = new Date().getFullYear();

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
  currentIndex = 0;
  carouselInterval: any;
  testimonials = [
    {
      name: 'Santosh & Tejaswini',
      imageUrl: 'https://images.pexels.com/photos/1020063/pexels-photo-1020063.jpeg?auto=compress&cs=tinysrgb&w=600',
      review: 'Absolutely stunning photography! Every moment was captured beautifully. Highly recommended!'
    },
    {
      name: 'Ajit & Neha',
      imageUrl: 'https://images.pexels.com/photos/167518/pexels-photo-167518.jpeg?auto=compress&cs=tinysrgb&w=600',
      review: 'The best pre-wedding shoot experience! The pictures came out magical and beyond expectations.'
    },
    {
      name: 'Uday & Ishwari',
      imageUrl: 'https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg?auto=compress&cs=tinysrgb&w=600',
      review: 'A cinematic wedding film that made us cry! The storytelling and quality were top-notch.'
    }
  ];


  // Portfolio Data
  portfolioCategories = ['All', 'Wedding', 'Pre-Wedding', 'Post-Wedding', 'Cinematic', 'Events'];

  allPortfolioItems: PortfolioItem[] = [
    { category: 'Wedding', imageUrl: 'assets/Wedding1.jpg', title: 'Wedding' },
    { category: 'Pre-Wedding', imageUrl: 'assets/PreWedding2.jpg', title: 'Pre-Wedding' },
    { category: 'Events', imageUrl: 'https://images.pexels.com/photos/14671410/pexels-photo-14671410.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', title: 'Events' },
    { category: 'Cinematic', imageUrl: 'https://images.pexels.com/photos/32404924/pexels-photo-32404924.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', title: 'Cinematic' },
    { category: 'Post-Wedding', imageUrl: 'assets/PostWedding2.jpg', title: 'Post-Wedding' },
    { category: 'Wedding', imageUrl: 'assets/Wedding2.jpg', title: 'Wedding' },
    { category: 'Pre-Wedding', imageUrl: 'assets/PreWedding1.jpg', title: 'Pre-Wedding' },
    { category: 'Cinematic', imageUrl: 'https://images.pexels.com/photos/31729520/pexels-photo-31729520.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', title: 'Cinematic' },
    { category: 'Events', imageUrl: 'https://images.pexels.com/photos/21568653/pexels-photo-21568653.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', title: 'Events' },
    { category: 'Wedding', imageUrl: 'assets/Wedding3.jpg', title: 'Wedding' },
    { category: 'Post-Wedding', imageUrl: 'assets/PostWedding1.jpg', title: 'Post-Wedding' },
    { category: 'Events', imageUrl: 'https://images.pexels.com/photos/17099785/pexels-photo-17099785.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', title: 'Events' },
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
  showModal = false;
  submitted = false;
  globalSuccessMessage = '';
  successMessage = '';
  errorMessage = '';

  form = {
    name: '',
    email: '',
    message: ''
  };

  openModal() {
    this.showModal = true;
    this.successMessage = '';
    this.errorMessage = '';
  }

  closeModal() {
    this.showModal = false;
    this.submitted = false;
    this.form = { name: '', email: '', message: '' };
  }

  sendEmail() {
    this.submitted = true;

    if (!this.form.name || !this.form.email || !this.form.message) {
      return;
    }

    const data = {
      access_key: "5b65c8ef-1e97-4de4-91fe-ae827b8df7af",
      name: this.form.name,
      email: this.form.email,
      message: this.form.message
    };
    this.showModal = false;

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(async (response) => {
        let json = await response.json();

        if (json.success) {

          // SUCCESS TOAST
          this.globalSuccessMessage =
            "Your message has been sent! We will contact you shortly.";

          // RESET FORM
          this.form = { name: "", email: "", message: "" };
          this.submitted = false;

          // CLOSE MODAL

          // AUTO HIDE TOAST
          setTimeout(() => {
            this.globalSuccessMessage = "";
          }, 4000);

        } else {
          this.errorMessage = json.message;
          this.successMessage = "";
        }
      })
      .catch(() => {
        this.errorMessage = "Something went wrong. Try again.";
        this.successMessage = "";
      });
  }

}
