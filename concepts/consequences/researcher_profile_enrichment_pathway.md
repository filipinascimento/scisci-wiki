# Researcher profile enrichment pathway

## Summary

Paper-level linkages can become intermediary evidence for richer author-level profiles combining career, funding, impact, and demographic attributes.

## Canonical Form

- Unit of analysis: researcher, author ID, paper-author-affiliation link, grant, demographic proxy, or external trace.
- Typical representation: paper-to-person profile bridge through linked scholarly tables.
- Mechanism, measurement, or validation target: author-level enrichment enabled by paper-level data-lake linkages.
- Empirical signature: career profiles combine publications, affiliations, grants, impact traces, and demographic probability layers..

## Uses in Science of Science

- Extends [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md) toward researcher profiles.
- Requires [name-based demographic inference](../methods/name_based_demographic_inference.md) caveats when demographic attributes are inferred.
- Connects SciSciNet author layers to broader inequality studies.

## Operationalization

- Start from paper-author-affiliation links.
- Join publications, grants, external traces, and demographic probability layers only where valid.
- Preserve disambiguation, privacy, missingness, and proxy-source metadata.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) describes using paper-level linkages to enrich individual profiles with professional and demographic information.

## Caveats

- Individual profiles raise stronger privacy, disambiguation, and demographic-proxy risks than paper-level analyses.
- Profile completeness can differ systematically by country, field, institution, and career stage.

## Links

- [Paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md)
- [Identifier bridge-key crosswalks](../representations/identifier_bridge_key_crosswalks.md)
- [SciSciNet authors-gender table](../datasets/sciscinet_authors_gender_table.md)
- [Name-based demographic inference](../methods/name_based_demographic_inference.md)
- [Gender and race stratification](../mechanisms/gender_race_stratification.md)
- [Upstream-downstream scholarly linkages](../datasets/upstream_downstream_scholarly_linkages.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]

## Metadata

- Concept ID: `researcher_profile_enrichment_pathway`
- Category: `consequences`
- Status: `full_text_seed`
- First seen paper: Lin et al. (2023) (2023)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Dimensions ID: `pub.1158536883`
- SciSciNet ID: `W4378980478`
- Aliases: individual profile enrichment; author-level linkage expansion; researcher career-demographic profile; paper-to-person profile bridge
