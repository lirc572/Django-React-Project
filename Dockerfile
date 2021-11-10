FROM node:14-alpine as build-node
WORKDIR /builddir
COPY ./frontend/ .
RUN yarn install
RUN yarn build

FROM continuumio/miniconda3:latest as conda-node
SHELL ["/bin/bash", "-c"]
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV BACKEND=/app/backend
ENV FRONTEND=/app/frontend/dist
COPY --from=build-node /builddir/dist $FRONTEND
COPY ./backend/ $BACKEND
WORKDIR $BACKEND
RUN . /root/.bashrc && conda init bash && conda env create -f environment.yml && conda activate django-react-project
# RUN python manage.py migrate
CMD . /root/.bashrc && conda activate django-react-project && python manage.py collectstatic && gunicorn backend.wsgi:application --bind 0.0.0.0:80
