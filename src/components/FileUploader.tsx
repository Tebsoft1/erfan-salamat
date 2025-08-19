import React, { useRef } from 'react'
import { IoCloseOutline, IoCloudUploadOutline } from 'react-icons/io5'
import {
  AiOutlineFileImage,
  AiOutlineFilePdf,
  AiOutlineFile,
} from 'react-icons/ai'

type FileUploaderProps = {
  selectedFile: File | null
  setSelectedFile: (file: File | null) => void
}
const FileUploader = (props: FileUploaderProps) => {
  const { selectedFile, setSelectedFile } = props
  const fileInputRef = useRef<HTMLInputElement>(null)

  // تشخیص نوع فایل و برگرداندن آیکون مناسب
  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) {
      return <AiOutlineFileImage className="w-8 h-8 text-blue-500" />
    } else if (file.type === 'application/pdf') {
      return <AiOutlineFilePdf className="w-8 h-8 text-red-500" />
    } else {
      return <AiOutlineFile className="w-8 h-8 text-gray-500" />
    }
  }

  // فرمت کردن حجم فایل
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  // انتخاب فایل
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {
      setSelectedFile(file)
    }

    // reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  // حذف فایل
  const removeFile = () => {
    setSelectedFile(null)
  }

  // کلیک روی div برای باز کردن file input
  const handleBoxClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="space-y-4">
      {/* select file box */}
      <div
        className="w-full p-4 rounded-lg text-lg bg-secondary-900 text-secondary-100 flex items-center justify-between cursor-pointer hover:bg-secondary-500 transition-colors border-2 border-dashed border-secondary-600 hover:border-secondary-400"
        onClick={handleBoxClick}
      >
        <span className="flex items-center gap-2">
          <IoCloudUploadOutline className="w-5 h-5" />
          انتخاب فایل
        </span>
        <span className="text-sm text-secondary-300">
          {selectedFile ? 'فایل انتخاب شده' : 'JPG, PNG, PDF'}
        </span>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,.pdf"
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>

      {/* show selected file */}
      {selectedFile && (
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-secondary-200">
            فایل انتخاب شده:
          </h3>
          <div className="flex items-center gap-4 p-3 bg-secondary-800 rounded-lg border border-secondary-600">
            {/* آیکون فایل */}
            <div className="flex-shrink-0">{getFileIcon(selectedFile)}</div>

            {/* اطلاعات فایل */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-secondary-100 truncate">
                {selectedFile.name}
              </p>
              <p className="text-xs text-secondary-400">
                {formatFileSize(selectedFile.size)}
              </p>
            </div>

            {/* دکمه حذف */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                removeFile()
              }}
              className="flex-shrink-0 p-1 text-secondary-400 hover:text-red-400 hover:bg-red-900/20 rounded transition-colors"
              title="حذف فایل"
            >
              <IoCloseOutline className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default FileUploader
