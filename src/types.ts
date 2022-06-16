export interface Secrets {
    login: string;
    masterPassword: string;
    accessKey: string;
    secretKey: string;
}

export interface DeviceKeys {
    accessKey: string;
    secretKeyEncrypted: string;
    masterPasswordEncrypted: string;
    localKeyEncrypted: string;
}

export interface DeviceKeysWithLogin extends DeviceKeys {
    login: string;
}

export interface BackupEditTransaction {
    /**
     * Version of the transaction (for treatproblems)
     */
    backupDate: number;
    /**
     * Identifiers (GUID or special identifiers XXXXXXXX_userId for unique objects)
     */
    identifier: string;
    /**
     * User local timestamp of the latest modification of this item
     */
    time: number;
    /**
     * Base 64 encoded content of the object
     */
    content: string;
    /**
     * Object type
     */
    type: string;
    /**
     * Whether this transaction is to EDIT(/ADD) an object or REMOVE it
     */
    action: 'BACKUP_EDIT';
}

export interface BackupRemoveTransaction {
    /**
     * Version of the transaction (for treatproblems)
     */
    backupDate: number;
    /**
     * Identifiers (GUID or special identifiers XXXXXXXX_userId for unique objects)
     */
    identifier: string;
    /**
     * User local timestamp of the latest modification of this item
     */
    time: number;
    /**
     * Object type
     */
    type: string;
    /**
     * Whether this transaction is to EDIT(/ADD) an object or REMOVE it
     */
    action: 'BACKUP_REMOVE';
}

export interface AuthentifiantTransactionContent {
    root: {
        KWAuthentifiant: {
            KWDataItem: {
                _attributes: {
                    key: string;
                };
                _cdata: string;
            }[];
        };
    };
}

export interface SecureNoteTransactionContent {
    root: {
        KWSecureNote: {
            KWDataItem: {
                _attributes: {
                    key: string;
                };
                _cdata: string;
            }[];
        };
    };
}

export interface VaultCredential {
    title: string;
    email?: string;
    login?: string;
    password: string;
    url: string;
    secondaryLogin?: string;
    category?: string;
    note?: string;
    lastBackupTime: string; // timestamp
    autoProtected: 'true' | 'false';
    autoLogin: 'true' | 'false';
    subdomainOnly: 'true' | 'false';
    useFixedUrl: 'true' | 'false';
    otpSecret?: string;
    appMetaData?: string; // info about linked mobile applications
    status: 'ACCOUNT_NOT_VERIFIED' | 'ACCOUNT_VERIFIED' | 'ACCOUNT_INVALID';
    numberUse: string; // number
    lastUse: string; // timestamp
    strength: string; // number between 0 and 100
    modificationDatetime: string; // timestamp
    checked: 'true' | 'false';
    id: string;
    anonId: string;
    localeFormat: string; // either UNIVERSAL or a country code
}

export class PrintableVaultCredential {
    vaultCredential: VaultCredential;

    constructor(vaultCredential: VaultCredential) {
        this.vaultCredential = vaultCredential;
    }

    toString(): string {
        return (
            this.vaultCredential.title +
            ' - ' +
            (this.vaultCredential.email || this.vaultCredential.login || this.vaultCredential.secondaryLogin || '')
        );
    }
}

export interface VaultNote {
    anonId: string;
    category?: string;
    content: string;
    creationDate?: string;
    creationDateTime?: string;
    id: string;
    lastBackupTime: string;
    secured: string; // either true or false
    spaceId?: string;
    title: string;
    updateDate?: string;
    localeFormat: string; // either UNIVERSAL or a country code
    type: string;
    sharedObject?: string;
    userModificationDatetime?: string;
}

export class PrintableVaultNote {
    vaultNote: VaultNote;

    constructor(vaultNote: VaultNote) {
        this.vaultNote = vaultNote;
    }

    toString(): string {
        return this.vaultNote.title;
    }
}
