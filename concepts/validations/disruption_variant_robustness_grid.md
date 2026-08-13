# Disruption variant robustness grid

## Summary

Disruption variant robustness grid checks whether conclusions based on disruption scores survive alternative definitions that remove self-citations, restrict predecessor sets, or simplify the citation-triad formula.

## Canonical Form

- Unit of analysis: focal paper, reference set, subsequent citing work, disruption variant, team-size bin, or citation window.
- Typical representation: side-by-side curves for `D0`, `D1`, `D2`, `D3`, `D4`, or another named disruption-index variant set.
- Validation target: ensure a team-size, field, policy, or historical conclusion is not an artifact of one disruption formula.
- Empirical signature: the direction of the focal result remains stable across multiple disruption variants.

## Uses in Science of Science

- Adds a Wu-specific formula grid to [disruption measure validation](disruption_measure_validation.md).
- Complements [alternative CD-index derivation robustness](alternative_cd_index_derivation_robustness.md), which generalizes formula sensitivity beyond the Wu team-size application.
- Supports [team size and disruption](../mechanisms/team_size_disruption.md), [within-author team-size disruption test](within_author_team_size_disruption_test.md), and [research-design team-size control](research_design_team_size_control.md).
- Links disruption robustness to [self-citation rates](../measures/self_citation_rates.md), [patent citation source roles](patent_citation_source_roles.md), and source-specific citation practices.

## Operationalization

- Compute the baseline disruption definition on focal-predecessor-future citation triads.
- Recompute after excluding self-citation links.
- Recompute using only high-impact or popular references.
- Recompute using simplified fractions of subsequent works that cite the focal work without its references.
- Compare team-size or other focal gradients across variants and report whether sign and rank patterns persist.

## Evidence and Validations

- Verified full-text evidence from Wu, Wang, and Evans (2019) compares five disruption definitions in Extended Data Fig. 5.
- Their `D0` is the main definition, `D1` removes self-citations, `D2` considers only popular references, `D3` uses the fraction of citing papers that cite the focal work and not its references, and `D4` counts citation events rather than papers in that simplified fraction.
- Wu et al. report that all disruption measures decrease with team size in the tested WOS sample.
- The paper uses this grid to show that the team-size disruption pattern is not driven only by self-citations, reference popularity, or one exact implementation of the disruption score.

## Caveats

- Robustness across nearby variants does not prove that disruption equals quality, novelty, or social value.
- Variant grids should be tailored to the data source; patents and software have different edge semantics from papers.
- Popular-reference thresholds and self-citation definitions can change with field, database, and author disambiguation quality.

## Links

- [disruption measure validation](disruption_measure_validation.md)
- [alternative CD-index derivation robustness](alternative_cd_index_derivation_robustness.md)
- [team size and disruption](../mechanisms/team_size_disruption.md)
- [within-author team-size disruption test](within_author_team_size_disruption_test.md)
- [research-design team-size control](research_design_team_size_control.md)
- [self-citation rates](../measures/self_citation_rates.md)
- [patent citation source roles](patent_citation_source_roles.md)
- [GitHub fork-citation network](../representations/github_fork_citation_network.md)

## References

- Wu, L., Wang, D., & Evans, J. A. (2019). Large teams develop and small teams disrupt science and technology. *Nature*, 566, 378-382. https://doi.org/10.1038/s41586-019-0941-9 [OpenAlex: W2913773162; Dimensions: pub.1112085796; WoS: unknown]

## Metadata

- Concept ID: `disruption_variant_robustness_grid`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wu et al. (2019) (2019)
- Latest seen paper: Wu et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41586-019-0941-9`
- OpenAlex ID: `W2913773162`
- Dimensions ID: `pub.1112085796`
- SciSciNet ID: `W2913773162`
- Aliases: disruption D0-D4 grid; disruption formula robustness; team-size disruption variant check; disruption definition sensitivity
