import swaggerJSDoc from "swagger-jsdoc";
import path from "path";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Scalable REST API",
      version: "1.0.0",
      description:
        "REST API with Authentication, Role-Based Access Control, and Task Management"
    },
    servers: [
      {
        url: "http://localhost:5000"
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ]
  },
  apis: [
    path.join(process.cwd(), "src/route/*.js")
  ]
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
export default swaggerSpec;
