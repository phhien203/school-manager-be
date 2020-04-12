import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {ValidationFilter} from "./filters/validation.filter";
import {HttpExceptionFilter} from "./filters/http.filter";
import {FallbackExceptionFilter} from "./filters/fallback.filter";
import {ValidationException} from "./filters/validation.exception";
import {ValidationError, ValidationPipe} from "@nestjs/common";


async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix('api');
    app.useGlobalFilters(
        new FallbackExceptionFilter(),
        new HttpExceptionFilter(),
        new ValidationFilter()
    );

    app.useGlobalPipes(new ValidationPipe({
        skipMissingProperties: true,
        exceptionFactory: (errors: ValidationError[]) => {
            const messages = errors.map(err => `${err.property} has wrong value ${err.value},\n${Object.values(err.constraints).join(', ')}`);

            return new ValidationException(messages);
        }
    }));

    await app.listen(9000);
}

bootstrap();
