import { BadRequestException } from '@nestjs/common';
import { isValid } from 'date-fns';

export function dateLocalGMTToISO(dateInLocalGMT: string): Date {
  // input: string => AAAA-MM-DDTHH:MM:SS.mss GMT#XXYY
  // output: Date => AAAA-MM-DDTHH:MM:SS.mssZ
  const dateISOMinusZCharlength = 23;

  if (dateInLocalGMT.length < dateISOMinusZCharlength) {
    throw new BadRequestException(
      'Invalid date! The date must have the following pattern: AAAA-MM-DDTHH:MM:SS.mss GMT#XXYY',
    );
  }
  const lastISODateIndexDigit = 22;
  const dateISOString = dateInLocalGMT.substring(0, lastISODateIndexDigit);
  const dateISO = new Date(`${dateISOString}Z`);

  if (!isValid(dateISO)) {
    throw new BadRequestException(
      'Invalid date! The date must have the following pattern: AAAA-MM-DDTHH:MM:SS.mss GMT#XXYY',
    );
  }
  return new Date(`${dateISOString}Z`);
}
