nterface TeacherAttributes {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow any additional attribute
}

class Teacher {
  private _firstName: string;
  private _lastName: string;
  private _fullTimeEmployee: boolean;
  private _yearsOfExperience?: number;
  private _location: string;
  private _additionalAttributes: Record<string, any> = {};

  constructor(attributes: TeacherAttributes) {
    this._firstName = attributes.firstName;
    this._lastName = attributes.lastName;
    this._fullTimeEmployee = attributes.fullTimeEmployee;
    this._yearsOfExperience = attributes.yearsOfExperience;
    this._location = attributes.location;

    // Allow any additional attribute to be added
    for (const key in attributes) {
      if (
        key !== 'firstName' &&
        key !== 'lastName' &&
        key !== 'fullTimeEmployee' &&
        key !== 'yearsOfExperience' &&
        key !== 'location'
      ) {
        this._additionalAttributes[key] = attributes[key];
      }
    }
  }

  // Getters
  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get fullTimeEmployee(): boolean {
    return this._fullTimeEmployee;
  }

  get yearsOfExperience(): number | undefined {
    return this._yearsOfExperience;
  }

  get location(): string {
    return this._location;
  }

  // Setter for yearsOfExperience
  set yearsOfExperience(value: number | undefined) {
    this._yearsOfExperience = value;
  }

  // Getter for additionalAttributes
  get additionalAttributes(): Record<string, any> {
    return this._additionalAttributes;
  }
}
