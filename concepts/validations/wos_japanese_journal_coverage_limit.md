# WoS Japanese journal coverage limit

## Summary

WoS Japanese journal coverage limit is the risk that a Web of Science publication frame misses Japanese-language or non-WoS outputs in ways that correlate with funding source, status, or field.

## Canonical Form

- Unit of analysis: publication, journal, language, country, funding source, or status group.
- Typical representation: coverage caveat for a WoS-based national publication sample.
- Validation target: whether the sampled outputs represent the target population of scientific work.
- Empirical signature: outputs outside WoS or English-language international journals are excluded from the analysis frame.

## Uses in Science of Science

- Adds a country-specific caveat to [Web of Science](../datasets/web_of_science.md).
- Links [citation database coverage sensitivity](citation_database_coverage_sensitivity.md) to national funding studies.
- Complements [WoS-Scopus coverage overlap](wos_scopus_coverage_overlap.md) and [fit-for-purpose bibliometric extracts](../methods/fit_for_purpose_bibliometric_extracts.md).
- Qualifies [project funding-source survey linkage](../datasets/project_funding_source_survey_linkage.md) when the publication frame is WoS-based.

## Operationalization

- Identify whether the sampling frame includes only WoS-indexed publications.
- Estimate missing local-language or non-indexed output where alternative databases exist.
- Test whether omitted outlets differ by field, funding source, institution type, gender, or career stage.
- Report the coverage boundary and avoid generalizing to all national research output without qualification.
- Run robustness checks with broader databases if possible.

## Evidence and Validations

- Verified full-text evidence from Wang, Lee, and Walsh (2018) notes that using WoS may miss Japanese-language or non-WoS publications.
- The paper flags this as a limitation if publication outlet choices differ by funding model or researcher status.
- This caveat matters because novelty and funding effects are estimated only for sampled WoS outputs.
- The motif generalizes to other national science-policy studies that rely on international bibliographic indexes.

## Caveats

- WoS may still cover the internationally visible outputs most relevant to some research questions.
- Alternative national databases can introduce different metadata and citation limitations.
- Coverage bias can interact with language, discipline, and institutional prestige.

## Links

- [Web of Science](../datasets/web_of_science.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [WoS-Scopus coverage overlap](wos_scopus_coverage_overlap.md)
- [fit-for-purpose bibliometric extracts](../methods/fit_for_purpose_bibliometric_extracts.md)
- [multidisciplinary reference-field reclassification](../methods/multidisciplinary_reference_field_reclassification.md)
- [project funding-source survey linkage](../datasets/project_funding_source_survey_linkage.md)

## References

- Wang, J., Lee, Y.-N., & Walsh, J. P. (2018). Funding model and creativity in science: Competitive versus block funding and status contingency effects. *Research Policy*, 47(6), 1070-1083. https://doi.org/10.1016/j.respol.2018.03.014 [OpenAlex: W2794465725; Dimensions: pub.1101833101; WoS: unknown]

## Metadata

- Concept ID: `wos_japanese_journal_coverage_limit`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2018) (2018)
- Latest seen paper: Wang et al. (2018) (2018)
- Primary reference DOI: `10.1016/j.respol.2018.03.014`
- OpenAlex ID: `W2794465725`
- Dimensions ID: `pub.1101833101`
- SciSciNet ID: `W2794465725`
- Aliases: Japanese WoS coverage limit; local-language publication coverage caveat; WoS national-output limitation; Japanese journal sampling bias
