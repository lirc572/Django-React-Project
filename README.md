# Django React Project

## Development

### Backend

Create a conda environment for the project:

```bash
# Under backend/ directory
conda env create -f environment.yml
```

Save the environment (after adding new packages):

```bash
# Under backend/ directory
conda env export > environment.yml
# Then remove "prefix" from the environment.yml file
```

Start development server:

```bash
# Under backend/ directory
conda activate django-react-project
python manage.py runserver
```

### Frontend

Install dependencies:

```bash
# Under frontend/ directory
yarn install
```

Start development server:

```bash
# Under frontend/ directory
yarn dev
```

## Deployment

Build Docker image:

```bash
docker build . -t lirc572/django-react-project:latest
docker push lirc572/django-react-project:latest
```

Run docker container:

```bash
docker run --rm -p 8000:80 lirc572/django-react-project:latest
```

## Notes

Initialization of conda environment and packages:

```bash
cd backend
conda create --name django-react-project python=3.8
conda activate smm
conda install -c conda-forge django
conda install -c conda-forge djangorestframework
conda install -c conda-forge gunicorn
conda install autopep8
conda install pylint
conda env export > environment.yml
```

## References

1. [Pylint options](https://pylint.pycqa.org/en/latest/technical_reference/features.html)
1. [Anaconda Docker guide](https://docs.anaconda.com/anaconda/user-guide/tasks/docker/)
1. [React TypeScript Cheatsheets](https://react-typescript-cheatsheet.netlify.app/)
