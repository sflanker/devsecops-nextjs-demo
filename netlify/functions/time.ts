import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const handler: Handler = (event: HandlerEvent, context: HandlerContext) => {
  return new Promise((resolve) => {
    setTimeout(
      () => {
        resolve({
          statusCode: 200,
          body: JSON.stringify({ time: new Date().toString() })
        })
      },
      1000
    );
  });
};

export { handler };