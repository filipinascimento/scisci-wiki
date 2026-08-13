# JCR subfield journal-cluster construction

## Summary

JCR subfield journal-cluster construction uses Journal Citation Reports citation environments to define subfield journal sets before extracting publication records for collaboration-network analysis.

## Canonical Form

- Unit of analysis: journal, journal cluster, subfield, publication record, or field case study.
- Typical representation: curated journal set, JCR citation cluster, subfield corpus, or journal-to-record extraction log.
- Method target: create reproducible subfield corpora from journal citation relatedness rather than ad hoc keyword searches.
- Empirical signature: a bounded journal set supplies papers, authors, and affiliations for a subfield-specific network.

## Uses in Science of Science

- Provides the corpus-construction layer for [subfield international coauthorship networks](../representations/subfield_international_coauthorship_networks.md).
- Links [Journal-cluster science backbones](../representations/journal_cluster_science_backbones.md) to field-level collaboration analysis.
- Complements [journal-set field-boundary filter](../validations/journal_set_field_boundary_filter.md), which audits whether selected journals match a target field.
- Helps make Web of Science and JCR collaboration studies reproducible by recording the journal-set derivation step.

## Operationalization

- Select a source year and citation-index system, such as Science Citation Index plus Journal Citation Reports.
- Identify clusters of journals related within a citing environment.
- Treat the cluster as the subfield corpus definition and retrieve all relevant articles for the target year.
- Record the journal list, article count, document-type handling, author-name handling, and address extraction rules.
- Use the resulting corpus to build author-level, country-level, or international-coauthorship networks.

## Evidence and Validations

- Verified full-text evidence from Wagner and Leydesdorff (2005) states that six subfield datasets were drawn from the Science Citation Index CD-ROM for 2000.
- The paper says journal clusters were identified through Journal Citation Reports using a method from Leydesdorff and Cozzens.
- Wagner and Leydesdorff collected 19,147 articles from 65 journals across six subfields, then used author names and addresses to study international coauthorship.
- They explicitly note that author names were taken as recorded and that contribution types such as reviews, letters, proceedings, and journal articles were not separated because the target was social connection structure.

## Caveats

- JCR journal clusters can miss relevant papers outside the selected journals.
- Citation-based journal clusters inherit coverage, language, and journal-selection biases from the source index.
- Taking author names as recorded can introduce homonym and synonym errors in author-level networks.
- Mixed document types may be appropriate for social-link analysis but not for output, impact, or field-normalized evaluation.

## Links

- [subfield international coauthorship networks](../representations/subfield_international_coauthorship_networks.md)
- [international collaboration networks](../representations/international_collaboration_networks.md)
- [Journal-cluster science backbones](../representations/journal_cluster_science_backbones.md)
- [journal-set field-boundary filter](../validations/journal_set_field_boundary_filter.md)
- [Web of Science](../datasets/web_of_science.md)
- [JCR 2006 journal citation network](../datasets/jcr_2006_journal_citation_network.md)
- [field classifications](../measures/field_classifications.md)
- [author name disambiguation](author_name_disambiguation.md)
- [homonym and synonym author errors](../validations/homonym_synonym_author_errors.md)

## References

- Wagner, C. S., & Leydesdorff, L. (2005). Network structure, self-organization, and the growth of international collaboration in science. *Research Policy*, 34(10), 1608-1618. https://doi.org/10.1016/j.respol.2005.08.002 [OpenAlex: W1964920419; Dimensions: pub.1029657568; SciSciNet: W1964920419; WoS: unknown]

## Metadata

- Concept ID: `jcr_subfield_journal_cluster_construction`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wagner and Leydesdorff (2005) (2005)
- Latest seen paper: Wagner and Leydesdorff (2005) (2005)
- Primary reference DOI: `10.1016/j.respol.2005.08.002`
- OpenAlex ID: `W1964920419`
- Dimensions ID: `pub.1029657568`
- SciSciNet ID: `W1964920419`
- Aliases: JCR journal-cluster subfield corpus; journal-cluster field construction; JCR subfield corpus; citation-environment journal set
