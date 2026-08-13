# Clinical-trial publication linkages

## Summary

Clinical-trial publication linkages connect scientific papers to clinical studies, usually through NCT trial identifiers, PMID crosswalks, or database-provided trial-publication references.

## Canonical Form

- Unit of analysis: paper, clinical trial, NCT number, PMID, trial reference, background paper, result paper, or relation row.
- Typical representation: paper-trial bipartite table with PaperID and NCT Number.
- Mechanism or measurement target: biomedical translation from research publications to clinical-study design, background, or reporting.
- Empirical signature: papers linked to ClinicalTrials.gov or AACT records through NCT numbers and publication identifiers.

## Uses in Science of Science

- Adds a translational biomedical layer to [upstream-downstream scholarly linkages](upstream_downstream_scholarly_linkages.md).
- Supports analyses of bench-to-bedside translation, clinical influence, and the lag between publication and trial use.
- Can be aggregated into measures such as [clinical-trial publication share](../measures/clinical_trial_publication_share.md) and [clinical-trial citation share](../measures/clinical_trial_citation_share.md).
- Provides one edge type in [research-object context graphs](../representations/research_object_context_graphs.md) and [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md).
- Complements patent, policy, and media links when evaluating non-publication uses of science.

## Operationalization

- Preserve NCT Number, PMID, source database, reference role, and extraction date.
- Distinguish background references from result-publication records when the source supports that distinction.
- Use PMID and DOI crosswalks to connect clinical records to a paper spine, then verify against title and date where possible.
- Keep trial-publication links separate from citation counts and grant support links.
- When used as an outcome, report whether the measure is direct trial publication, citation by trial publication, or model-based translational potential.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) describes clinical-trial citations to science using ClinicalTrials.gov and AACT data.
- Lin et al. report 686,524 records linking clinical trials to background or result papers as of January 26, 2022, then select 480,893 background-paper records.
- The paper links SciSciNet primary PaperID to NCT Number through PMID, using the curated MAG PaperExtendedAttributes table as an intermediary.
- Lin et al. report 438,220 paper-clinical linkages between 61,447 NCT clinical trials and 337,430 SciSciNet primary papers.

## Caveats

- Trial references do not all mean the same thing; background, eligibility, intervention, and result-publication roles should be separated when possible.
- Clinical-trial databases are biomedical and regulatory systems, so coverage is field- and jurisdiction-specific.
- PMID-based matching misses non-indexed publications and can inherit duplicate or stale identifier problems.

## Links

- [upstream-downstream scholarly linkages](upstream_downstream_scholarly_linkages.md)
- [Dimensions](dimensions.md)
- [SciSciNet-v2](sciscinet_v2.md)
- [scholarly data lakes](scholarly_data_lakes.md)
- [MAG publication backbone](mag_publication_backbone.md)
- [scholarly table primary keys](../representations/scholarly_table_primary_keys.md)
- [scholarly identifier spine](../representations/scholarly_identifier_spine.md)
- [research-object context graphs](../representations/research_object_context_graphs.md)
- [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md)
- [patent-paper links](patent_paper_links.md)
- [policy document mentions](../measures/policy_document_mentions.md)
- [clinical-trial publication share](../measures/clinical_trial_publication_share.md)
- [clinical-trial citation share](../measures/clinical_trial_citation_share.md)
- [approximate potential to translate](../measures/approximate_potential_to_translate.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]
- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]

## Metadata

- Concept ID: `clinical_trial_publication_linkages`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Dimensions ID: `pub.1158536883`
- SciSciNet ID: `W4378980478`
- Aliases: paper-clinical trial links; NCT publication links; trial-paper tables; clinical citations to science
