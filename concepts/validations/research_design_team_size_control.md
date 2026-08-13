# Research-design team-size control

## Summary

Research-design team-size control tests whether a team-size result survives comparisons across article types, such as theoretical versus empirical papers or reviews versus original research.

## Canonical Form

- Unit of analysis: paper, document type, research-design proxy, team-size bin, source journal, or matched corpus.
- Typical representation: stratified team-size curves or regressions inside design categories.
- Validation target: show that team-size effects are not only a byproduct of large teams doing empirical work and small teams doing theory.
- Empirical signature: the outcome gradient by team size remains within each research-design or document-type stratum.

## Uses in Science of Science

- Validates [team size and disruption](../mechanisms/team_size_disruption.md) against task-composition explanations.
- Links document-type controls to [document-type citation filtering](../methods/document_type_citation_filtering.md) and [disruption measure validation](disruption_measure_validation.md).
- Helps interpret [team-size disruption-impact tail divergence](team_size_disruption_impact_tail_divergence.md), because high-impact empirical and review-intensive work can differ from theoretical work.

## Operationalization

- Construct or match corpora where research design is observable or plausibly proxied.
- Use figure count, journal title, document type, or manual coding to separate theoretical, empirical, review, and original research.
- Re-estimate the team-size outcome gradient inside each stratum.
- Report whether the direction and size of the relationship are robust to the design split.

## Evidence and Validations

- Verified full-text evidence from Wu, Wang, and Evans (2019) matches 4,258 arXiv papers from 1992-2003 to WOS and uses figure count as a proxy for empirical versus theoretical work.
- The arXiv split contains 1,502 articles without figures and 2,756 articles with figures; in both groups, disruption percentile decreases with team size.
- The same extended-data check identifies 22,672 review articles from 48 journals with both "annual" and "review" in the journal title, plus 1,338,808 articles cited by those reviews.
- For both reviewing articles and reviewed original articles, disruption percentile decreases with team size.

## Caveats

- Figure count is a coarse proxy and may not cleanly distinguish empirical from theoretical work in all fields.
- Review-journal selection captures a particular class of reviews and may miss narrative reviews, systematic reviews, or review articles in general journals.
- Research-design controls do not eliminate all differences in funding, equipment, institution, or collaboration norms.

## Links

- [team size and disruption](../mechanisms/team_size_disruption.md)
- [team-size disruption-impact tail divergence](team_size_disruption_impact_tail_divergence.md)
- [within-author team-size disruption test](within_author_team_size_disruption_test.md)
- [WOS-patent-GitHub disruption corpus](../datasets/wos_patent_github_disruption_corpus.md)
- [disruption measure validation](disruption_measure_validation.md)
- [document-type citation filtering](../methods/document_type_citation_filtering.md)
- [Web of Science](../datasets/web_of_science.md)
- [disruption index](../measures/disruption_index.md)

## References

- Wu, L., Wang, D., & Evans, J. A. (2019). Large teams develop and small teams disrupt science and technology. *Nature*, 566, 378-382. https://doi.org/10.1038/s41586-019-0941-9 [OpenAlex: W2913773162; Dimensions: pub.1112085796; WoS: unknown]

## Metadata

- Concept ID: `research_design_team_size_control`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wu et al. (2019) (2019)
- Latest seen paper: Wu et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41586-019-0941-9`
- OpenAlex ID: `W2913773162`
- Dimensions ID: `pub.1112085796`
- SciSciNet ID: `W2913773162`
- Aliases: empirical theoretical team-size control; review original team-size control; article-type disruption robustness; research-design disruption robustness
