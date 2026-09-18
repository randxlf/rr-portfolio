import React, { useEffect, useRef, useState } from "react";
import { X, Trophy, ArrowUpRight, ZoomIn } from "lucide-react";
export default function ProjectDialog({
  project,
  onClose
}) {
  const ref = useRef(null);
  const [zoom, setZoom] = useState(null);
  useEffect(() => {
    if (!project) return;
    const dialog = ref.current;
    const trigger = document.activeElement;
    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (trigger?.isConnected) trigger.focus({
        preventScroll: true
      });
    };
  }, [project]);
  useEffect(() => {
    if (!zoom) return;
    const onKey = e => {
      if (e.key === 'Escape') setZoom(null);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [zoom]);
  if (!project) return null;
  const images = project.forge ? ['/projects/forge-and-fade/hero.png'] : [project.mainFull || project.main, ...(project.sideFull || project.side || [])];
  return <dialog ref={ref} className="project-dialog" aria-labelledby="project-title" onCancel={onClose} onClick={e => {
    if (e.target === e.currentTarget) onClose();
  }}><div className="dialog-inner"><button className="dialog-close icon-button" onClick={onClose} aria-label="Close project"><X /></button><span className="eyebrow">PROJECT NOTES / {project.label}</span><h2 id="project-title">{project.title}</h2><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><p>{project.desc}</p>{project.award && <div className="award"><Trophy size={20} /><span>{project.award}</span></div>}<div className="project-actions">{project.actions.map(({
          icon: Icon,
          ...action
        }) => <a className="button secondary" key={action.label} href={action.href} target="_blank" rel="noopener noreferrer"><Icon size={16} />{action.label}<ArrowUpRight size={15} /></a>)}</div><div className="dialog-gallery">{images.map((src, index) => {
        const alt = `${project.title} — ${index === 0 ? 'project preview' : 'additional view ' + index}`;
        return <button type="button" className="zoomable-photo" key={src} onClick={() => setZoom({
          src,
          alt
        })} aria-label={`Zoom into ${project.title} image ${index + 1}`}><img src={src} alt={alt} /><span className="zoom-hint"><ZoomIn size={16} /></span></button>;
      })}</div>{project.team && <figure className="team"><div>{project.team.images.map(src => <button type="button" className="zoomable-photo" key={src} onClick={() => setZoom({
        src,
        alt: 'Randolf with the DICT internship team'
      })} aria-label="Zoom into internship team photo"><img src={src} alt="Randolf with the DICT internship team" loading="lazy" /><span className="zoom-hint"><ZoomIn size={16} /></span></button>)}</div><figcaption>{project.team.caption}</figcaption></figure>}{project.awardImg && <button type="button" className="text-link award-zoom" onClick={() => setZoom({
        src: project.awardImg,
        alt: 'Award certificate'
      })}>View award certificate <ArrowUpRight size={15} /></button>}{zoom && <div className="lightbox" role="dialog" aria-modal="true" aria-label={zoom.alt} onClick={() => setZoom(null)}><button className="lightbox-close icon-button" onClick={() => setZoom(null)} aria-label="Close zoomed image"><X /></button><img src={zoom.src} alt={zoom.alt} onClick={e => e.stopPropagation()} /></div>}</div></dialog>;
}
