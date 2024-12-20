## Getting Started

First, run the development server:

```bash
npm start
# or
yarn start
# or
pnpm start
# or
bun start
```

## Using Docker

1. [Install Docker](https://docs.docker.com/get-docker/) on your machine.
2. Before building your container, you might need to adjust the PORT environment variable in Dockerfile depending on your infrastructure.
3. Build your container: `docker build -t my-backend .`.
4. Run your container: `docker run -p 3002:3002 my-backend`.

You can view your images created with `docker images`.

## Deploying to Google Cloud Run

1. Install the [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) so you can use `gcloud` on the command line.
2. Run `gcloud auth login` to log in to your account.
3. [Create a new project](https://cloud.google.com/run/docs/quickstarts/build-and-deploy) in Google Cloud Run (e.g. `nextjs-docker`). Ensure billing is turned on.
4. Build your container image using Cloud Build: `gcloud builds submit --tag gcr.io/PROJECT-ID/helloworld --project PROJECT-ID`. This will also enable Cloud Build for your project.
5. Deploy to Cloud Run: `gcloud run deploy --image gcr.io/PROJECT-ID/helloworld --project PROJECT-ID --platform managed --allow-unauthenticated`. Choose a region of your choice.

   - You will be prompted for the service name: press Enter to accept the default name, `helloworld`.
   - You will be prompted for [region](https://cloud.google.com/run/docs/quickstarts/build-and-deploy#follow-cloud-run): select the region of your choice, for example `us-central1`.
