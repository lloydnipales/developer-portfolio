    const icons = {
      success: '<i class="fas fa-check-circle" style="color:#28a745;"></i>',
      info: '<i class="fas fa-info-circle" style="color:#007bff;"></i>',
      warning: '<i class="fas fa-exclamation-triangle" style="color:#ffc107;"></i>',
      error: '<i class="fas fa-times-circle" style="color:#dc3545;"></i>',
      default: '<i class="fas fa-bell" style="color:#6c757d;"></i>'
    };

    function showNotification(type, message) {
      const container = document.getElementById('notification-container');
      const alert = document.createElement('div');
      alert.className = `alert ${type}`;
      alert.innerHTML = `
        <div class="alert-content">
          <button class="close-btn" onclick="closeNotification(this.parentElement.parentElement)">
            <i class="fas fa-xmark"></i>
          </button>
          <div class="message">
            ${icons[type]}<span>${message}</span>
          </div>
        </div>
        <div class="progress-bar"><div class="progress"></div></div>
      `;
      container.appendChild(alert);
      setTimeout(() => closeNotification(alert), 5000);
    }

    function closeNotification(element) {
      element.style.animation = 'fadeOut 0.3s forwards';
      setTimeout(() => element.remove(), 300);
    }