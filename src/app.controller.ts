import { Controller, Get } from '@nestjs/common';
import { DogDto } from './dog.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  @Get()
  // @ApiResponse({type: () => DogDto})
  // @ApiResponse({type: DogDto})
  @ApiResponse({})
  getHello(): DogDto {
  // getHello(): any {
    return null;
  }
}
