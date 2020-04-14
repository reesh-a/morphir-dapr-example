FROM reesh/morphir-elm:0.4.0
WORKDIR /usr/src/morphir-elm
COPY Example.elm /usr/src/morphir-elm/examples/Morphir/Dapr/Input/
RUN sh ./examples/morphir-dapr-build-example.sh
# RUN cd /usr/src/morphir-elm/examples && ls -lrt && cat Main.elm