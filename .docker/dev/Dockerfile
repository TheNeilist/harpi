FROM node:4-wheezy

RUN useradd --user-group --create-home --shell /bin/false app &&\
  npm install --global npm@3.7.5 &&\
  npm install --global grunt-cli@1.2.0 &&\
  npm install --global bower@1.7.9 &&\
  npm install --global phantomjs-prebuilt@2.1.12

# Install gem sass for  grunt-contrib-sass plus graphviz and jre for puml
RUN apt-get update -qq && apt-get install -y build-essential ruby graphviz default-jre && gem install sass

ENV HOME=/home/app

COPY package.json bower.json .bowerrc $HOME/harpi/
RUN mkdir -p $HOME/harpi/public/lib && chown -R app:app $HOME/*

USER app
WORKDIR $HOME/harpi
RUN npm install

USER root
COPY . $HOME/harpi
RUN chown -R app:app $HOME/*
USER app


# Port 3000 for server
# Port 35729 for livereload
# Port 5858 for node debugging
EXPOSE 3000 35729 5858
CMD ["grunt", "debug", "--force"]