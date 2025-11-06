# Use the official PHP image with Apache preinstalled
FROM php:8.2-apache

# Copy all website files into the Apache document root
COPY . /var/www/html/

# Expose port 80 for web traffic
EXPOSE 80

# Start Apache in the 
CMD ["apache2-foreground"]
