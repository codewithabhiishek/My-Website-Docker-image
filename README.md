# Navigate to the cloned repository directory
cd My-Website-Docker-image

# Copy project files into the cloned repository directory
cp ../Dockerfile ../index.css ../index.js ../index.html ../question.js .

# Create the README.md file
echo "# My Website Docker Image

This repository contains the source code and Docker configuration for my personal website.

## Project Structure

\`\`\`
.
├── Dockerfile
├── index.html
├── index.css
├── index.js
├── question.js
└── README.md
\`\`\`

## Docker Image

The Docker image for this website is available on DockerHub.

### Pulling the Docker Image

To pull the Docker image, use the following command:

\`\`\`bash
docker pull codewithabhi01/my-website-image:tagname
\`\`\`

### Running the Docker Container

To run the Docker container, use the following command:

\`\`\`bash
docker run -d -p 80:80 codewithabhi01/my-website-image:tagname
\`\`\`

This command will start the container in detached mode and map port 80 of the host to port 80 of the container.

### Building the Docker Image Locally

If you want to build the Docker image locally, you can use the provided \`Dockerfile\`. Navigate to the directory containing the \`Dockerfile\` and run:

\`\`\`bash
docker build -t codewithabhi01/my-website-image:tagname .
\`\`\`

### Running the Docker Container Locally

After building the Docker image locally, you can run the container using:

\`\`\`bash
docker run -d -p 80:80 codewithabhi01/my-website-image:tagname
\`\`\`

## Project Files

- **index.html**: The main HTML file for the website.
- **index.css**: The CSS file for styling the website.
- **index.js**: The JavaScript file for adding interactivity.
- **question.js**: An additional JavaScript file for specific functionality.
- **Dockerfile**: The Docker configuration file to build the Docker image.
- **README.md**: This file, providing information about the project.

## Additional Notes

Feel free to modify and extend the project. Contributions are welcome!

If you encounter any issues or have any questions, please open an issue on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
" > README.md

# Add a .gitignore file (optional)
echo "node_modules/" >> .gitignore
echo "build/" >> .gitignore

# Add all files to the staging area
git add .

# Commit the files
git commit -m "Initial commit of Dockerized website"

# Push the commit to GitHub
git push origin main
