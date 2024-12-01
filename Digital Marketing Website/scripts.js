function showServiceDetails(service) {
    const serviceDetails = document.getElementById('service-details');
    let details = '';

    switch(service) {
        case 'social':
            details = `
                <h2>Social Media Marketing</h2>
                <img src="social-media.jpg" alt="Social Media Marketing" style="width:100%; height:auto;">
                <h3>Contact Us</h3>
                <p>Name: Kalyan</p>
                <p>Email: kalyan@example.com</p>
                <p>Company: Social Solutions</p>
                <p>Phone: 9876543210</p>
                <p>Address: hyderabd, telangana, india</p>
            `;
            break;
        case 'email':
            details = `
                <h2>Email Marketing</h2>
                <img src="email-marketing.jpg" alt="Email Marketing" style="width:100%; height:auto;">
                <h3>Contact Us</h3>
                <p>Name: sai teja</p>
                <p>Email: saiteja@example.com</p>
                <p>Company: Email Experts</p>
                <p>Phone: 9876543210</p>
                <p>Address: 456 Email Ave, City, Country</p>
            `;
            break;
        case 'affiliate':
            details = `
                <h2>Affiliate Marketing</h2>
                <img src="affiliate-marketing.jpg" alt="Affiliate Marketing" style="width:100%; height:auto;">
                <h3>Contact Us</h3>
                <p>Name: Bindhu </p>
                <p>Email: Bindhu@example.com</p>
                <p>Company: Affiliate Pros</p>
                <p>Phone: 9876543210</p>
                <p>Address: Lb nagar, hyderabad, india</p>
            `;
            break;
        case 'video':
            details = `
                <h2>Video Marketing</h2>
                <img src="video-marketing.jpg" alt="Video Marketing" style="width:100%; height:auto;">
                <h3>Contact Us</h3>
                <p>Name: swetha</p>
                <p>Email: swetha@example.com</p>
                <p>Company: Video Creators</p>
                <p>Phone: 9876543210</p>
                <p>Address: hyderabad, telangana, india</p>
            `;
            break;
        case 'seo':
            details = `
                <h2>Search Engine Optimization</h2>
                <img src="seo-marketing.jpg" alt="SEO" style="width:100%; height:auto;">
                <h3>Contact Us</h3>
                <p>Name: dinesh</p>
                <p>Email: Dinesh@example.com</p>
                <p>Company: SEO Masters</p>
                <p>Phone: 9876543210</p>
                <p>Address: Hyderabad, telangana, india</p>
            `;
            break;
        case 'content':
            details = `
                <h2>Content Marketing</h2>
                <img src="content-marketing.jpg" alt="Content Marketing" style="width:100%; height:auto;">
                <h3>Contact Us</h3>
                <p>Name: Laxman</p>
                <p>Email: Laxman@example.com</p>
                <p>Company: Content Creators</p>
                <p>Phone: 9876543210</p>
                <p>Address: hyderabad, telangana, india</p>
            `;
            break;
    }

    serviceDetails.innerHTML = details;
    serviceDetails.style.display = 'block';
}
