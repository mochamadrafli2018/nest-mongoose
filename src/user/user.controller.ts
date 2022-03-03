import { 
    Controller, Delete, Get, Header, HttpCode, HttpStatus,
    Param, Post, Res,  
  } from '@nestjs/common';

@Controller('User')
export class UserController {
  @Post()
  @HttpCode(200)
  create(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send();
  }

  @Get()
  @HttpCode(200)
  @Header('Cache-Control', 'none') // user for authorization
  findAll(@Res() res: Response) {
    res.status(HttpStatus.OK).json([]);
  }

  @Get(':id')
  findOne(@Param('id') params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}