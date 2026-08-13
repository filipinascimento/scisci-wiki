# Science-based patent grouping

## Summary

Science-based patent grouping classifies patents by whether their references include scientific publications, creating comparable groups for measuring science reliance and patent impact.

## Canonical Form

- Unit of analysis: patent, patent family, non-patent reference, cited scientific publication, or patent cohort.
- Typical representation: binary indicator for whether a patent cites at least one scientific publication.
- Method target: split technology outputs into science-citing and non-science-citing groups.
- Empirical signature: `P_s` patents cite scientific publications and `P_non-s` patents do not.

## Uses in Science of Science

- Provides the classification step behind [scientific knowledge application index](../measures/scientific_knowledge_application_index.md).
- Defines the groups compared by [forward citation differentiation index](../measures/forward_citation_differentiation_index.md).
- Converts [scientific non-patent references](../datasets/scientific_non_patent_references.md) into patent-level science-reliance variables after [non-patent-reference science filtering](non_patent_reference_science_filtering.md).
- Supports comparisons by organization type, country, year, and technology class.

## Operationalization

- Extract backward citations from patents, separating patent citations from non-patent citations.
- Filter non-patent citations to scientific articles using bibliographic matching, rule-based parsing, manual review, or hybrid workflows.
- Assign patents with at least one scientific-publication reference to `P_s`.
- Assign patents without scientific-publication references to `P_non-s`.
- Preserve citation-source roles, confidence scores, and reference-cleaning decisions where available.

## Evidence and Validations

- Verified full-text evidence from Wang and Li (2018) classifies nano medical device patents into those citing scientific publications and those not citing scientific publications.
- Their paper explicitly treats `P_s` as patents grounded on both technological and scientific bases, while `P_non-s` patents have only a technological citation basis in the observed reference data.
- They note that non-patent citations include scientific articles, withdrawn patents, manuals, databases, web information, news, and other items.
- They use automatic identification combined with manual recognition to retain scientific articles as science-based citations.

## Caveats

- The absence of a scientific-publication citation does not prove absence of scientific knowledge use.
- Some scientific references may be missed if non-patent references are incomplete, abbreviated, mistranscribed, or not front-page-visible.
- Some patent citations are examiner-added rather than applicant-supplied, so source roles matter when interpreting knowledge flow.
- Binary grouping can hide intensity differences, such as patents citing one paper versus dozens of papers.

## Links

- [scientific knowledge application index](../measures/scientific_knowledge_application_index.md)
- [normalized scientific knowledge application index](../measures/normalized_scientific_knowledge_application_index.md)
- [forward citation differentiation index](../measures/forward_citation_differentiation_index.md)
- [Derwent nano medical device patent panel](../datasets/derwent_nano_medical_device_patent_panel.md)
- [scientific non-patent references](../datasets/scientific_non_patent_references.md)
- [non-patent-reference science filtering](non_patent_reference_science_filtering.md)
- [patent family expansion deduplication](patent_family_expansion_deduplication.md)
- [organization-type science application gradient](../measures/organization_type_science_application_gradient.md)
- [IPC-class science linkage heterogeneity](../measures/ipc_class_science_linkage_heterogeneity.md)
- [patent citation source roles](../validations/patent_citation_source_roles.md)
- [unstructured patent-reference matching](unstructured_patent_reference_matching.md)
- [patent-science link confidence score](../measures/patent_science_link_confidence_score.md)

## References

- Wang, L., & Li, Z. (2018). Knowledge transfer from science to technology—The case of nano medical device technologies. *Frontiers in Research Metrics and Analytics*, 3, 11. https://doi.org/10.3389/frma.2018.00011 [OpenAlex: W2792521913; Dimensions: pub.1101486828; WoS: unknown]

## Metadata

- Concept ID: `science_based_patent_grouping`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wang and Li (2018) (2018)
- Latest seen paper: Wang and Li (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00011`
- OpenAlex ID: `W2792521913`
- Dimensions ID: `pub.1101486828`
- SciSciNet ID: `W2792521913`
- Aliases: science-citing patent split; Ps Pnon-s grouping; science-based patent indicator; patent scientific reference grouping
