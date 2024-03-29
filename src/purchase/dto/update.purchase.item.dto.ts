import { Injectable } from "@nestjs/common";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

@Injectable()
export class UpdatePurchaseItemDto{
    @IsOptional()
    @IsNumber()
    purinfo_id
    @IsOptional()
    @IsNumber()
    purch_yymm
    @IsOptional()
    @IsNumber()
    proditm_id
    @IsOptional()
    @IsString()
    proditm_nm
    @IsNotEmpty()
    @IsNumber()
    reqitm_qty
    @IsOptional()
    @IsNumber()
    puritem_qty
    @IsOptional()
    @IsNumber()
    unit_price
    @IsOptional()
    @IsNumber()
    vat_amount
    @IsOptional()
    @IsNumber()
    tax_amount
    @IsOptional()
    @IsNumber()
    totitm_amt
    @IsOptional()
    @IsNumber()
    warnty_dur
    @IsOptional()
    @IsNumber()
    vatamt_pct
    @IsOptional()
    @IsNumber()
    taxamt_pct
    @IsOptional()
    @IsString()
    wtydur_type
    @IsOptional()
    @IsString()
    wrnty_info
    @IsNotEmpty()
    @IsBoolean()
    active_status

}