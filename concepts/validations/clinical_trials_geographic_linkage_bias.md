# Clinical-trials geographic linkage bias

## Summary

Clinical-trial publication links can inherit geographic unevenness from ClinicalTrials.gov coverage and linked-paper availability.

## Canonical Form

- Unit of analysis: clinical trial, NCT identifier, linked paper, country, PMID, or trial-paper edge.
- Typical representation: country-stratified comparison of clinical trials and linked trial publications.
- Mechanism, measurement, or validation target: geographic coverage bias in clinical-trial publication linkages.
- Empirical signature: country distributions for registered trials and paper-linked trials diverge..

## Uses in Science of Science

- Adds a geography audit to [clinical trial publication linkages](../datasets/clinical_trial_publication_linkages.md).
- Refines [external linkage source-scope caveat](external_linkage_source_scope_caveat.md).
- Useful when using SciSciNet clinical links as translational-impact evidence.

## Operationalization

- Join PMID, NCT, and paper identifiers.
- Compare country distributions for trials and linked-trial publications.
- Flag geography as a linkage-scope caveat in derived analyses.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) describes NCT-PMID-paper linkage and flags geographic heterogeneity in clinical-trial link coverage.

## Caveats

- This is a coverage warning rather than a corrected denominator.
- Country fields can reflect trial registration, sponsor, site, or publication metadata depending on source.

## Links

- [Clinical-trial publication linkages](../datasets/clinical_trial_publication_linkages.md)
- [External linkage source-scope caveat](external_linkage_source_scope_caveat.md)
- [Upstream-downstream scholarly linkages](../datasets/upstream_downstream_scholarly_linkages.md)
- [Identifier bridge-key crosswalks](../representations/identifier_bridge_key_crosswalks.md)
- [Dimensions](../datasets/dimensions.md)
- [Citation database coverage sensitivity](citation_database_coverage_sensitivity.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]

## Metadata

- Concept ID: `clinical_trials_geographic_linkage_bias`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Lin et al. (2023) (2023)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Dimensions ID: `pub.1158536883`
- SciSciNet ID: `W4378980478`
- Aliases: clinical trial geography caveat; NCT linkage geography bias; trial-paper country coverage; ClinicalTrials.gov geographic heterogeneity
