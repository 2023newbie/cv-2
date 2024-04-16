import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA_ENG } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: `${RESUME_DATA_ENG.name} | ${RESUME_DATA_ENG.about}`,
  description: RESUME_DATA_ENG.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA_ENG.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              {RESUME_DATA_ENG.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA_ENG.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA_ENG.location}
              </a>
            </p>
            <div className="flex flex-col gap-y-1 gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {RESUME_DATA_ENG.contact.email ? (
                <div className="flex items-center gap-2">
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA_ENG.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
                <p>{RESUME_DATA_ENG.contact.email}</p>
                </div>
              ) : null}
              {RESUME_DATA_ENG.contact.tel ? (
                <div className="flex items-center gap-2">
                  <Button
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`tel:${RESUME_DATA_ENG.contact.tel}`}>
                      <PhoneIcon className="size-4" />
                    </a>
                  </Button>
                  <p>{RESUME_DATA_ENG.contact.tel}</p>
                </div>
              ) : null}
              {RESUME_DATA_ENG.contact.social.map((social) => (
                <div className="flex items-center gap-2" key={social.name}>
                  <Button
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={social.url}>
                      <social.icon className="size-4" />
                    </a>
                  </Button>
                  <p>{social.url}</p>
                </div>
              ))}
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
              {RESUME_DATA_ENG.contact.email ? (
                <a href={`mailto:${RESUME_DATA_ENG.contact.email}`}>
                  <span className="underline">{RESUME_DATA_ENG.contact.email}</span>
                </a>
              ) : null}
              {RESUME_DATA_ENG.contact.tel ? (
                <a href={`tel:${RESUME_DATA_ENG.contact.tel}`}>
                  <span className="underline">{RESUME_DATA_ENG.contact.tel}</span>
                </a>
              ) : null}
            </div>
          </div>

          <Avatar className="size-28">
            <AvatarImage alt={RESUME_DATA_ENG.name} src={RESUME_DATA_ENG.avatarUrl} />
            <AvatarFallback>{RESUME_DATA_ENG.initials}</AvatarFallback>
          </Avatar>
        </div>

        <Section>
          <h2 className="text-xl font-bold">
            {/* Giới thiệu */}
            Introduction
          </h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {RESUME_DATA_ENG.summary}
          </p>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">
            {/* Kinh nghiệm */}
            Experience
            </h2>
          {RESUME_DATA_ENG.work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline" href={work.link}>
                        {work.company}
                      </a>

                      {/* <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span> */}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {work.start} - {work.end ?? "Present"}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs">
                  {work.description}
                </CardContent>
              </Card>
            );
          })}
        </Section>

        <Section>
          <h2 className="text-xl font-bold">
            {/* Công nghệ */}
            Technology
            </h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA_ENG.skills.map((skill) => {
              return <Badge style={{background: skill.includes('Solid') ? '' : skill.includes('Good') ? '#666' : '#999' }} key={skill}>{skill}</Badge>;
            })}
          </div>
        </Section>

        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">
            {/* Dự án */}
            Project
            </h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA_ENG.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">
            {/* Học vấn */}
            Education
            </h2>
          {RESUME_DATA_ENG.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2">{education.degree}</CardContent>
              </Card>
            );
          })}
        </Section>
      </section>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA_ENG.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA_ENG.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
