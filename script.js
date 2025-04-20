document.getElementById('votingForm').addEventListener('submit', function (e) {
      e.preventDefault(); // prevent default form submission

      const name = document.getElementById('name').value.trim();
      const age = document.getElementById('age').value.trim();

      // Basic validation for empty inputs
      if (name === '' || age === '') {
        alert('Please enter valid details.');
        return;
      }

      // Create a Promise that resolves or rejects based on age after 4 seconds
      const votingPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (parseInt(age) > 18) {
            resolve(name);
          } else {
            reject(name);
          }
        }, 4000);
      });

      votingPromise
        .then((name) => {
          alert(`Welcome, ${name}. You can vote.`);
        })
        .catch((name) => {
          alert(`Oh sorry ${name}. You aren't old enough.`);
        });
    });
