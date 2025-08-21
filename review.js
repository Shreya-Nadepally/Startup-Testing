document.addEventListener('DOMContentLoaded', function () {
    const ratingFilter = document.getElementById('rating-filter');
    const sortOrder = document.getElementById('sort-order');
    const reviewsContainer = document.getElementById('reviews').querySelector('.container');
    const reviewButton = document.querySelector('.cta-button');
    const modal = document.getElementById('review-modal');
    const closeModalButton = document.getElementById('close-modal');
    const reviewForm = document.getElementById('review-form');
    const userNameInput = document.getElementById('user-name');
    const userRatingInput = document.getElementById('user-rating');
    const userReviewInput = document.getElementById('user-review');
    let reviews = [
      {
        name: 'John Doe',
        title: 'Entrepreneur',
        rating: 5,
        reviewText: 'This platform allowed me to find the right team and successfully validate my startup idea!',
        date: '2024-12-01',
      },
    ];
    function renderReviews() {
      const selectedRating = ratingFilter.value;
      const selectedSortOrder = sortOrder.value;
  
      let filteredReviews = reviews;
      if (selectedRating !== 'all') {
        filteredReviews = filteredReviews.filter(review => review.rating == selectedRating);
      }
      if (selectedSortOrder === 'newest') {
        filteredReviews.sort((a, b) => new Date(b.date) - new Date(a.date));
      } else if (selectedSortOrder === 'highest-rated') {
        filteredReviews.sort((a, b) => b.rating - a.rating);
      }
      reviewsContainer.innerHTML = '';
      filteredReviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
  
        reviewElement.innerHTML = `
          <div class="user-info">
            <img src="th (4).jpg" alt="User photo">
            <div>
              <h3>${review.name}</h3>
              <p>${review.title}</p>
            </div>
          </div>
          <div class="rating">
            <span>⭐⭐⭐⭐⭐</span>
            <p>${review.rating}/5</p>
          </div>
          <p>"${review.reviewText}"</p>
          <small>Submitted on: ${review.date}</small>
        `;
        reviewsContainer.appendChild(reviewElement);
      });
    }
    ratingFilter.addEventListener('change', renderReviews);
    sortOrder.addEventListener('change', renderReviews);
    reviewButton.addEventListener('click', function () {
      modal.style.display = 'block';
    });
    closeModalButton.addEventListener('click', function () {
      modal.style.display = 'none';
    });
    reviewForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const userName = userNameInput.value;
      const userRating = parseInt(userRatingInput.value);
      const userReview = userReviewInput.value;
      const date = new Date().toISOString().split('T')[0]; 
      const newReview = {
        name: userName,
        title: 'Entrepreneur',
        rating: userRating,
        reviewText: userReview,
        date: date,
      };
      reviews.push(newReview);
      renderReviews();

      modal.style.display = 'none';
      reviewForm.reset();
    });
  
    
    renderReviews();
  });
  
  