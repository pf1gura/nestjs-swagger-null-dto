import { ApiProperty } from '@nestjs/swagger';

export class DogDto {
	@ApiProperty()
	name: string;

	@ApiProperty()
	// willGiveError: null;
	willGiveError: undefined;
	// willGiveError: string;
}
