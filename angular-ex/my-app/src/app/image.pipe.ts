import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'imageDefault'
})
export class ImageDefaultPipe implements PipeTransform{
  transform(src: string, type: string = "avatar"): string {
    let imageDefault: string;
    if(!src){
      if(type == "logo"){
        src="http://emptyensemble.com/wp-content/themes/emptyensemble2015/assets/images/empty_ensemble_empty_set_logo.png";
      }
      else{
        src="https://www.mautic.org/media/images/default_avatar.png";
      }
    }
  return src;
  }
}