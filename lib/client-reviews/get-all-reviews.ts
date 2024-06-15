type Review = {
  clientName: string;
  review: string;
  picture?: string;
};

const reviews: Review[] = [
  {
    clientName: 'John Doe',
    review:
      'Working with Sheraz was a pleasure. His expertise in responsive design transformed our website into a user-friendly platform.',
    picture: '/images/reviews/john_doe.jpg',
  },
  {
    clientName: 'Jane Smith',
    review:
      'Sheraz’s skills in Next.js and React are top-notch. He delivered the project ahead of schedule and exceeded our expectations.',
  },
  {
    clientName: 'Michael Johnson',
    review:
      'Sheraz is a highly skilled frontend developer. His attention to detail and dedication to quality are remarkable.',
    picture: '/images/reviews/michael_johnson.jpg',
  },
  {
    clientName: 'Emily Davis',
    review:
      'I highly recommend Sheraz for any web development needs. His proficiency in Tailwind CSS is exceptional.',
  },
  {
    clientName: 'Chris Brown',
    review:
      'Sheraz delivered a fantastic project with impeccable code quality. His communication throughout the process was excellent.',
    picture: '/images/reviews/chris_brown.jpg',
  },
  {
    clientName: 'Jessica Wilson',
    review:
      'Sheraz’s ability to handle complex tasks under tight deadlines is impressive. His work on our project was outstanding.',
  },
  {
    clientName: 'Daniel Anderson',
    review:
      'Sheraz consistently delivers high-quality work. His skills in React and modern frameworks are unparalleled.',
    picture: '/images/reviews/daniel_anderson.jpg',
  },
  {
    clientName: 'Olivia Martinez',
    review:
      'I am extremely satisfied with Sheraz’s work. His expertise in frontend development made a significant impact on our project.',
  },
  {
    clientName: 'David Garcia',
    review:
      'Sheraz is a talented developer who brings creativity and technical prowess to every project. Highly recommended!',
    picture: '/images/reviews/david_garcia.jpg',
  },
  {
    clientName: 'Sophia Lee',
    review:
      'Sheraz’s work on our website was transformative. His understanding of user experience is truly impressive.',
  },
  {
    clientName: 'James Hernandez',
    review:
      'Sheraz’s dedication to his craft is evident in the quality of his work. His skills in responsive design are exceptional.',
    picture: '/images/reviews/james_hernandez.jpg',
  },
  {
    clientName: 'Isabella King',
    review:
      'Sheraz exceeded our expectations with his innovative solutions and attention to detail. His work is simply outstanding.',
  },
  {
    clientName: 'Benjamin Wright',
    review:
      'Sheraz is a true professional. His expertise in Next.js and Tailwind CSS made our project a success.',
    picture: '/images/reviews/benjamin_wright.jpg',
  },
  {
    clientName: 'Ava Lopez',
    review:
      'Sheraz’s ability to deliver high-quality work under pressure is impressive. He is a valuable asset to any team.',
  },
  {
    clientName: 'Lucas Walker',
    review:
      'Sheraz brought our vision to life with his exceptional frontend development skills. His work is top-notch.',
    picture: '/images/reviews/lucas_walker.jpg',
  },
  {
    clientName: 'Mia Scott',
    review:
      'I am thoroughly impressed with Sheraz’s work. His expertise in modern web technologies is evident in every project.',
  },
  {
    clientName: 'Henry Young',
    review:
      'Sheraz is a highly skilled developer with a keen eye for detail. His work on our project was exceptional.',
    picture: '/images/reviews/henry_young.jpg',
  },
  {
    clientName: 'Amelia Hill',
    review:
      'Sheraz’s proficiency in responsive design and frontend development is unmatched. I highly recommend his services.',
  },
  {
    clientName: 'Ethan Green',
    review:
      'Sheraz’s work ethic and dedication to quality are commendable. His skills in React and Tailwind CSS are impressive.',
    picture: '/images/reviews/ethan_green.jpg',
  },
  {
    clientName: 'Harper Adams',
    review:
      'Sheraz delivered outstanding results on our project. His technical expertise and creativity are truly impressive.',
  },
];

export async function getAllReviews(): Promise<Review[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(reviews);
    }, 4000);
  });
}
