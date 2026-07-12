// ============================================
// Project Data – organized by site with images
// ============================================

// SHINDE
import shindeDay from './imgs/sites/SHINDE/EXTERIOR/FINAL_DAYTIME.jpg';
import shindeEvening from './imgs/sites/SHINDE/EXTERIOR/FINAL_EVENING.jpg';
import shindeNight from './imgs/sites/SHINDE/EXTERIOR/FINAL_NIGHT.jpg';
import shindeWork1 from './imgs/sites/SHINDE/WORK DONE/1486daa4-b5ec-4f6a-9b3c-16248f5e99f1.jpg';
import shindeWork2 from './imgs/sites/SHINDE/WORK DONE/27692706-537f-4c84-98f1-09346a08f437.jpg';
import shindeWork3 from './imgs/sites/SHINDE/WORK DONE/6992903f-46d3-4cf9-8c96-91726fc43443.jpg';
import shindeInt1 from './imgs/sites/SHINDE/INTERIOR/IMG_1267.JPG';
import shindeInt2 from './imgs/sites/SHINDE/INTERIOR/IMG_1268.JPG';
import shindeInt3 from './imgs/sites/SHINDE/INTERIOR/IMG_1269.JPG';
import shindeInt4 from './imgs/sites/SHINDE/INTERIOR/IMG_1270.JPG';
import shindeInt5 from './imgs/sites/SHINDE/INTERIOR/IMG_0831.JPG';

// HARENDRA SINGH
import harendraExt1 from './imgs/sites/HARENDRA SINGH/EXTERIOR/WhatsApp Image 2026-06-29 at 6.04.37 PM.jpeg';
import harendraExt2 from './imgs/sites/HARENDRA SINGH/EXTERIOR/WhatsApp Image 2026-06-29 at 6.04.37 PM (1).jpeg';
import harendraExt3 from './imgs/sites/HARENDRA SINGH/EXTERIOR/WhatsApp Image 2026-06-29 at 6.04.37 PM (2).jpeg';
import harendraExtRender1 from './imgs/sites/HARENDRA SINGH/EXTERIOR/ChatGPT Image Jun 30, 2026, 04_04_06 PM.png';
import harendraExtRender2 from './imgs/sites/HARENDRA SINGH/EXTERIOR/ChatGPT Image Jun 30, 2026, 04_11_37 PM.png';
import harendraExtRender3 from './imgs/sites/HARENDRA SINGH/EXTERIOR/ChatGPT Image Jun 30, 2026, 04_13_47 PM.png';
import harendraInt1 from './imgs/sites/HARENDRA SINGH/INTERIOR/0012e9c8-db35-4efd-a16e-8593f7bf65f6.jpg';
import harendraInt2 from './imgs/sites/HARENDRA SINGH/INTERIOR/02eb5c3b-8ee0-4aea-bb18-dd1fc2926024.jpg';
import harendraInt3 from './imgs/sites/HARENDRA SINGH/INTERIOR/3fc92313-b7de-484a-b8c7-7db9df3bd072.jpg';
import harendraInt4 from './imgs/sites/HARENDRA SINGH/INTERIOR/4522d3ec-74c1-4372-a92f-dde0333d8f79.jpg';
import harendraInt5 from './imgs/sites/HARENDRA SINGH/INTERIOR/4a605bcd-0da0-4217-867a-a5356667f7fc.jpg';
import harendraInt6 from './imgs/sites/HARENDRA SINGH/INTERIOR/5b7918bf-b4b7-4180-8142-484ec19a6dcb.jpg';
import harendraInt7 from './imgs/sites/HARENDRA SINGH/INTERIOR/add9e984-a6ce-47ff-b5e2-6d2773548d39.jpg';
import harendraInt8 from './imgs/sites/HARENDRA SINGH/INTERIOR/c08af8a6-5929-4eb1-8570-f66f1a7801b3.jpg';

// SANJAY KENDLE
import skExt1 from './imgs/sites/SANJAY KENDLE/Exterior/WhatsApp Image 2026-06-30 at 3.00.02 PM.jpeg';
import skExt2 from './imgs/sites/SANJAY KENDLE/Exterior/WhatsApp Image 2026-06-30 at 3.00.02 PM (1).jpeg';
import skExt3 from './imgs/sites/SANJAY KENDLE/Exterior/WhatsApp Image 2026-06-30 at 3.00.03 PM.jpeg';
import skExt4 from './imgs/sites/SANJAY KENDLE/Exterior/WhatsApp Image 2026-06-30 at 3.00.03 PM (1).jpeg';
import skExt5 from './imgs/sites/SANJAY KENDLE/Exterior/WhatsApp Image 2026-06-30 at 3.00.03 PM (2).jpeg';
import skExt6 from './imgs/sites/SANJAY KENDLE/Exterior/WhatsApp Image 2026-06-30 at 3.00.03 PM (3).jpeg';
import skExt7 from './imgs/sites/SANJAY KENDLE/Exterior/WhatsApp Image 2026-06-30 at 3.22.31 PM.jpeg';

// SANJAY SINGH
import ssRender1 from './imgs/sites/SANJAY SINGH/EXTERIOR/ChatGPT Image Jun 26, 2026, 04_23_08 PM.png';
import ssRender2 from './imgs/sites/SANJAY SINGH/EXTERIOR/ChatGPT Image Jun 26, 2026, 04_24_02 PM.png';
import ssRender3 from './imgs/sites/SANJAY SINGH/EXTERIOR/ChatGPT Image Jun 26, 2026, 04_25_01 PM.png';
import ssRender4 from './imgs/sites/SANJAY SINGH/EXTERIOR/ChatGPT Image Jun 26, 2026, 04_27_04 PM.png';

// OTHERS
import pranayExt1 from './imgs/sites/PRANAY KHAPEKAR/Exterior/WhatsApp Image 2026-06-29 at 6.08.49 PM.jpeg';
import pranayExt2 from './imgs/sites/PRANAY KHAPEKAR/Exterior/WhatsApp Image 2026-06-30 at 2.56.55 PM (1).jpeg';
import udayExt from './imgs/sites/UDAY SINHA/EXTERIOR/WhatsApp Image 2026-06-30 at 3.02.44 PM.jpeg';
import waghmareExt from './imgs/sites/WAGHMARE/EXTERIOR/WhatsApp Image 2026-06-30 at 3.01.37 PM.jpeg';
import waghmareRend1 from './imgs/sites/WAGHMARE/EXTERIOR/ChatGPT Image Jun 30, 2026, 03_49_43 PM.png';
import waghmareRend2 from './imgs/sites/WAGHMARE/EXTERIOR/ChatGPT Image Jun 30, 2026, 03_50_56 PM.png';
import building1 from './imgs/building1.jpg';

const projects = [
  {
    id: 'shinde',
    title: 'Shinde Residence',
    location: '',
    category: 'Residential',
    description: 'A complete residential project featuring modern exterior design, elegant interiors, and meticulous craftsmanship throughout.',
    images: {
      exterior: [
        { src: shindeDay, label: 'Day View — Front Elevation' },
        { src: shindeEvening, label: 'Evening View — Golden Hour' },
        { src: shindeNight, label: 'Night View — Illuminated' },
      ],
      interior: [
        { src: shindeInt1, label: 'Living Room' },
        { src: shindeInt2, label: 'Main Hall' },
        { src: shindeInt3, label: 'Kitchen Area' },
        { src: shindeInt4, label: 'Bedroom' },
        { src: shindeInt5, label: 'Bathroom' },
      ],
      'work-done': [
        { src: shindeWork1, label: 'Completed Work 1' },
        { src: shindeWork2, label: 'Completed Work 2' },
        { src: shindeWork3, label: 'Completed Work 3' },
      ],
    },
    thumbnail: shindeDay,
  },
  {
    id: 'harendra-singh',
    title: 'Harendra Singh Residence',
    location: '',
    category: 'Residential',
    description: 'A premium residence with stunning exterior architecture, beautifully designed interiors, and 3D rendered concepts.',
    images: {
      exterior: [
        { src: harendraExt1, label: 'Front View' },
        { src: harendraExt2, label: 'Side View' },
        { src: harendraExt3, label: 'Exterior Detail' },
        { src: harendraExtRender1, label: '3D Render — Front' },
        { src: harendraExtRender2, label: '3D Render — Angle' },
        { src: harendraExtRender3, label: '3D Render — Perspective' },
      ],
      interior: [
        { src: harendraInt1, label: 'Main Hall' },
        { src: harendraInt2, label: 'Dining Area' },
        { src: harendraInt3, label: 'Living Room' },
        { src: harendraInt4, label: 'Interior Decor' },
        { src: harendraInt5, label: 'Bedroom' },
        { src: harendraInt6, label: 'Kitchen' },
        { src: harendraInt7, label: 'Bathroom' },
        { src: harendraInt8, label: 'Staircase' },
      ],
    },
    thumbnail: harendraExt1,
  },
  {
    id: 'sanjay-kendle',
    title: 'Sanjay Kendle Project',
    location: '',
    category: 'Residential',
    description: 'A well-designed residential project showcasing multiple exterior perspectives and architectural details.',
    images: {
      exterior: [
        { src: skExt1, label: 'Front Elevation' },
        { src: skExt2, label: 'Side Elevation' },
        { src: skExt3, label: 'Main View' },
        { src: skExt4, label: 'Alternate View 1' },
        { src: skExt5, label: 'Alternate View 2' },
        { src: skExt6, label: 'Alternate View 3' },
        { src: skExt7, label: 'Wide Angle' },
      ],
    },
    thumbnail: skExt1,
  },
  {
    id: 'sanjay-singh',
    title: 'Sanjay Singh Design',
    location: '',
    category: 'Commercial',
    description: 'Modern commercial design concepts rendered in high detail, showcasing professional architectural visualization.',
    images: {
      exterior: [
        { src: ssRender1, label: 'Front Render' },
        { src: ssRender2, label: 'Angle Render' },
        { src: ssRender3, label: 'Perspective 1' },
        { src: ssRender4, label: 'Perspective 2' },
      ],
    },
    thumbnail: ssRender1,
  },
  {
    id: 'pranay-khapekar',
    title: 'Pranay Khapekar Project',
    location: '',
    category: 'Residential',
    description: 'A residential project with classic exterior design, captured from multiple angles.',
    images: {
      exterior: [
        { src: pranayExt1, label: 'Exterior Main' },
        { src: pranayExt2, label: 'Exterior Side' },
      ],
    },
    thumbnail: pranayExt1,
  },
  {
    id: 'uday-sinha',
    title: 'Uday Sinha Project',
    location: '',
    category: 'Residential',
    description: 'A residential construction project with a clean, modern exterior finish.',
    images: {
      exterior: [
        { src: udayExt, label: 'Exterior View' },
      ],
    },
    thumbnail: udayExt,
  },
  {
    id: 'waghmare',
    title: 'Waghmare Residence',
    location: '',
    category: 'Residential',
    description: 'A complete residential project featuring actual photographs and 3D design renders.',
    images: {
      exterior: [
        { src: waghmareExt, label: 'Front View' },
        { src: waghmareRend1, label: '3D Render 1' },
        { src: waghmareRend2, label: '3D Render 2' },
      ],
    },
    thumbnail: waghmareExt,
  },
  {
    id: 'vishal-bhagat',
    title: 'Vishal Bhagat Project',
    location: '',
    category: 'Residential',
    description: 'Project images coming soon.',
    images: {
      exterior: [{ src: building1, label: 'Coming Soon' }],
    },
    thumbnail: building1,
  },
];

export default projects;