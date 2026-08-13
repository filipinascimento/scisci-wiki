# Artifact-population inference boundary

## Summary

Massive administrative corpora can be populations of indexed artifacts without being random samples of all possible science, technology, or software production.

## Canonical Form

- Unit of analysis: indexed artifact population and external population claim.
- Typical representation: source-universe statement with observation windows, exclusions, and replication subsamples.
- Validation target: boundary between census-like source coverage and external generalization.
- Empirical signature: a corpus is exhaustive for a defined source universe but incomplete for broader scientific activity.

## Uses in Science of Science

- Adds inference-boundary language to [WOS-patent-GitHub disruption corpus](../datasets/wos_patent_github_disruption_corpus.md).
- Useful for large-scale studies using administrative records rather than survey samples.
- Connects corpus construction to [citation database coverage sensitivity](citation_database_coverage_sensitivity.md).

## Operationalization

- Document source universe, administrative exclusions, observation windows, and external-generalization claims.
- Prefer source- and period-specific replication over sampling-style reassurance.
- State which outputs are omitted, such as books, private industrial work, failed projects, or nonindexed proceedings.

## Evidence and Validations

- Verified full-text evidence from Wu et al. (2019) states that the works represent a population of relevant artifacts rather than a sample of other populations and uses subsamples to confirm patterns.
- This creates a reusable inference boundary for large administrative corpora.

## Caveats

- Indexed artifact populations omit books, nonindexed conferences, private industrial work, abandoned projects, and failed attempts.
- A census of one source does not imply generalization to all knowledge production.

## Links

- [WOS-patent-GitHub disruption corpus](../datasets/wos_patent_github_disruption_corpus.md)
- [Authorship-output indicator boundary](authorship_output_indicator_boundary.md)
- [Citation sample representativeness check](citation_sample_representativeness_check.md)
- [Journal-panel census inference caveat](journal_panel_census_inference_caveat.md)
- [Citation database coverage sensitivity](citation_database_coverage_sensitivity.md)

## References

- Wu, L., Wang, D., & Evans, J. A. (2019). Large teams develop and small teams disrupt science and technology. *Nature*, 566, 378-382. https://doi.org/10.1038/s41586-019-0941-9 [OpenAlex: W2913773162; Dimensions: pub.1112085796; WoS: unknown]

## Metadata

- Concept ID: `artifact_population_inference_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wu et al. (2019) (2019)
- Latest seen paper: Wu et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41586-019-0941-9`
- OpenAlex ID: `W2913773162`
- Dimensions ID: `pub.1112085796`
- SciSciNet ID: `W2913773162`
- Aliases: indexed artifact population boundary; administrative corpus inference boundary; large-corpus external validity caveat
