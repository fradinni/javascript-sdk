import { FilesAndFoldersInfo } from './files-and-folders-info';
import { GenerateBackupFileDownloadBundleParamsJson }
  from './__json__/generate-backup-file-download-bundle-params-json';

/**
 * Generate backup file download bundle params.
 */
/* istanbul ignore next: autogenerated */
export class GenerateBackupFileDownloadBundleParams {

  constructor(private _json: GenerateBackupFileDownloadBundleParamsJson) {
  }

  /**
   * Get task name.
   * The name that should be associated with the task.
   * @returns {string}
   */
  get taskName(): string {
    return this._json.task_name;
  }

  /**
   * Get backup run uid.
   * The UID of the backup run that is associated with files to be downloaded.
   * @returns {string}
   */
  get backupRunUid(): string {
    return this._json.backup_run_uid;
  }

  /**
   * Get files and folders.
   * The set of files/folders to be included.
   * Items should be unique in list.
   * @returns {Array<FilesAndFoldersInfo>}
   */
  get filesAndFolders(): Array<FilesAndFoldersInfo> {
    return this._json.files_and_folders.map(it => new FilesAndFoldersInfo(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {GenerateBackupFileDownloadBundleParamsJson}
   */
  get json(): GenerateBackupFileDownloadBundleParamsJson {
    return Object.assign({}, this._json);
  }

  /**
   * Get the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }
}
