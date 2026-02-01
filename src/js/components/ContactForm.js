export class ContactForm {
    constructor(formElement) {
        this.form = formElement;
        this.isSubmitting = false;
    }

    initialize() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
            this.addFieldValidation();
        }
    }

    addFieldValidation() {
        const requiredFields = this.form.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            field.addEventListener('blur', () => this.validateField(field));
            field.addEventListener('input', () => this.clearFieldError(field));
        });

        // Email field specific validation
        const emailField = this.form.querySelector('#email');
        if (emailField) {
            emailField.addEventListener('blur', () => this.validateEmail(emailField));
        }

        // Phone field formatting
        const phoneField = this.form.querySelector('#phone');
        if (phoneField) {
            phoneField.addEventListener('input', (e) => this.formatPhoneNumber(e));
        }
    }

    validateField(field) {
        const value = field.value.trim();
        const isValid = value.length > 0;

        if (!isValid) {
            this.showFieldError(field, 'Полето е задължително');
            return false;
        } else {
            this.clearFieldError(field);
            return true;
        }
    }

    validateEmail(emailField) {
        const email = emailField.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email && !emailRegex.test(email)) {
            this.showFieldError(emailField, 'Моля, въведете валиден имейл адрес');
            return false;
        } else if (email) {
            this.clearFieldError(emailField);
            return true;
        }
        return true;
    }

    formatPhoneNumber(event) {
        let value = event.target.value.replace(/\D/g, '');
        
        // Format Bulgarian phone numbers
        if (value.startsWith('359')) {
            value = value.replace(/(\d{3})(\d{1})(\d{3})(\d{3})/, '+$1 $2 $3 $4');
        } else if (value.startsWith('0')) {
            value = value.replace(/(\d{1})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4');
        }
        
        event.target.value = value;
    }

    showFieldError(field, message) {
        field.classList.add('is-invalid');
        
        let errorDiv = field.parentNode.querySelector('.invalid-feedback');
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.className = 'invalid-feedback';
            field.parentNode.appendChild(errorDiv);
        }
        errorDiv.textContent = message;
    }

    clearFieldError(field) {
        field.classList.remove('is-invalid');
        const errorDiv = field.parentNode.querySelector('.invalid-feedback');
        if (errorDiv) {
            errorDiv.remove();
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        
        if (this.isSubmitting) return;

        // Validate all required fields
        const requiredFields = this.form.querySelectorAll('[required]');
        let isFormValid = true;

        requiredFields.forEach(field => {
            if (!this.validateField(field)) {
                isFormValid = false;
            }
        });

        // Validate email specifically
        const emailField = this.form.querySelector('#email');
        if (emailField && !this.validateEmail(emailField)) {
            isFormValid = false;
        }

        if (!isFormValid) {
            this.showMessage('Моля, коригирайте грешките във формата.', 'error');
            return;
        }

        this.isSubmitting = true;
        const submitButton = this.form.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        // Show loading state
        submitButton.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Изпращане...';
        submitButton.disabled = true;

        try {
            // Collect form data
            const formData = this.collectFormData();
            
            // Simulate API call (replace with actual submission)
            await this.submitForm(formData);
            
            this.showMessage('Благодарим! Вашето съобщение беше изпратено успешно. Ще се свържем с вас скоро.', 'success');
            this.form.reset();
            
        } catch (error) {
            this.showMessage('Съжаляваме, възникна грешка при изпращането на съобщението. Моля, опитайте отново или се свържете с нас директно.', 'error');
        } finally {
            // Reset button state
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            this.isSubmitting = false;
        }
    }

    collectFormData() {
        const formData = new FormData(this.form);
        const data = {};
        
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }

        // Add additional data
        data.timestamp = new Date().toISOString();
        data.source = 'Форма за контакт - уебсайт Comp-Tech';
        
        return data;
    }

    async submitForm(data) {
        // Simulate API call - replace with actual endpoint
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate success (you would replace this with actual API call)
                console.log('Form submission data:', data);
                resolve(data);
                
                // Example of how you might handle this with a real API:
                // fetch('/api/contact', {
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json' },
                //     body: JSON.stringify(data)
                // }).then(response => {
                //     if (response.ok) resolve(response);
                //     else reject(response);
                // });
            }, 1500);
        });
    }

    showMessage(message, type) {
        // Remove existing messages
        const existingMessages = this.form.querySelectorAll('.alert');
        existingMessages.forEach(msg => msg.remove());

        // Create new message
        const messageDiv = document.createElement('div');
        messageDiv.className = `alert alert-${type === 'success' ? 'success' : 'danger'} alert-dismissible fade show`;
        messageDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;

        // Insert at top of form
        this.form.insertBefore(messageDiv, this.form.firstChild);

        // Auto-remove success messages after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                if (messageDiv.parentNode) {
                    messageDiv.remove();
                }
            }, 5000);
        }

        // Scroll to message
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}