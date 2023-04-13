window.reviewData = [
  {
    name: "Tirth",
    date: new Date(2022, 2, 15),
    rating: 5,
    text: "Badminton is one of my favorite sports, and I absolutely loved playing it at this facility. The courts were well-maintained, and the staff was friendly and helpful."
  },
  {
    name: "Omkar",
    date: new Date(2022, 3, 5),
    rating: 3,
    text: "I had an okay experience playing badminton at this facility. The courts were a bit dirty, and the equipment was outdated. However, the staff was friendly and the prices were reasonable."
  },
  {
    name: "Shiv",
    date: new Date(2022, 4, 10),
    rating: 2,
    text: "I was disappointed with the badminton courts at this facility. They were poorly maintained and the equipment was old and worn. I wouldn't recommend playing here."
  },
  {
    name: "Teesha",
    date: new Date(2022, 5, 20),
    rating: 4,
    text: "I had a great time playing badminton at this facility. The courts were clean and well-maintained, and the staff was friendly and accommodating. I'll definitely be back!"
  },
  {
    name: "Maitri",
    date: new Date(2022, 6, 1),
    rating: 5,
    text: "I've been playing badminton for years, and this is one of the best facilities I've ever been to. The courts are top-notch, and the staff is incredibly knowledgeable and helpful. I highly recommend it!"
  }
];


  // function generateReviewHTML(reviews) {
  //   const reviewsContainer = document.getElementById('reviews-container');
  
  //   reviews.forEach((review) => {
  //     const reviewDiv = document.createElement('div');
  //     reviewDiv.classList.add('review');
  
  //     const nameHeader = document.createElement('h3');
  //     nameHeader.textContent = review.name;
  //     reviewDiv.appendChild(nameHeader);
  
  //     const datePara = document.createElement('p');
  //     datePara.textContent = review.date.toLocaleDateString();
  //     reviewDiv.appendChild(datePara);
  
  //     const ratingPara = document.createElement('p');
  //     ratingPara.textContent = `Rating: ${review.rating}/5`;
  //     reviewDiv.appendChild(ratingPara);
  
  //     const textPara = document.createElement('p');
  //     textPara.textContent = review.text;
  //     reviewDiv.appendChild(textPara);
  
  //     reviewsContainer.appendChild(reviewDiv);
  //   });
  // }


  function generateReviewHTML(reviews) {
    const reviewsContainer = document.getElementById('reviews-container');
  
    reviews.forEach((review) => {
      const reviewDiv = document.createElement('div');
      reviewDiv.classList.add('review');
  
      const nameHeader = document.createElement('h3');
      nameHeader.textContent = review.name;
      reviewDiv.appendChild(nameHeader);
  
      const datePara = document.createElement('p');
      datePara.textContent = review.date.toLocaleDateString();
      reviewDiv.appendChild(datePara);
  
      const ratingPara = document.createElement('p');
      const ratingString = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);
      ratingPara.textContent = ratingString;
      ratingPara.classList.add('rating');
      reviewDiv.appendChild(ratingPara);
  
      const textPara = document.createElement('p');
      textPara.textContent = review.text;
      reviewDiv.appendChild(textPara);
  
      reviewsContainer.appendChild(reviewDiv);
    });
  }
  