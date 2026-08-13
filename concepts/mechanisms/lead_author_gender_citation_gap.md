# Lead-author gender citation gap

## Summary

Lead-author gender citation gap is the empirical pattern that papers with women in prominent author positions receive fewer field-normalized citations than comparable papers with men in those positions.

## Canonical Form

- Unit of analysis: paper, author position, collaboration type, country, field, and citation window.
- Typical representation: average relative citations by sole-author, first-author, or last-author gender.
- Mechanism: cumulative advantage and evaluation feedback can amplify gendered output and collaboration differences through citation-based recognition.
- Empirical signature: female sole, first, or last author categories have lower normalized citation impact than corresponding male categories.

## Uses in Science of Science

- Links [gender and race stratification](gender_race_stratification.md) to [citation impact indicators](../measures/citation_impact_indicators.md).
- Uses [field-normalized citation impact](../measures/field_normalized_citation_impact.md) to compare citation outcomes across disciplines and years.
- Connects impact differences to [gendered collaboration rate](../measures/gendered_collaboration_rate.md), because international collaboration is often citation advantaged.
- Depends on [gendered author-position gap](../measures/gendered_author_position_gap.md) for the position categories being compared.
- Can be inspected with [gender-author-role citation heatmap](../representations/gender_author_role_citation_heatmap.md) when author position, collaboration type, country, and field are crossed.
- Feeds [citation-evaluation disparity feedback](citation_evaluation_disparity_feedback.md) when citation indicators enter researcher assessment.
- Provides a warning for evaluation systems that use citations without checking demographic stratification.

## Operationalization

- Assign inferred gender to authorships and identify prominent positions, such as sole author, first author, and last author.
- Classify papers by collaboration type, such as single-authored, national collaboration, or international collaboration.
- Count citations to a declared census date and normalize by field or specialty and publication year.
- Compare average relative citation scores across corresponding female and male author-position categories.
- Report author-order conventions, missing gender assignments, and whether papers with unassigned authors are excluded or retained.

## Evidence and Validations

- Verified full-text evidence from Lariviere et al. (2013) analyzes sole authorship, first authorship, and last authorship in a 2008-2012 Web of Science corpus.
- They report that, in the most productive countries, articles with women in dominant author positions receive fewer citations than articles with men in the same positions.
- The paper's lead-author gender and citation display shows lower average relative citations for female versus male key-author categories across single-authored, national-collaboration, and international-collaboration papers.
- That display is split out as [gender-author-role citation heatmap](../representations/gender_author_role_citation_heatmap.md).
- Lariviere et al. explicitly connect this citation disadvantage to women's more domestic publication portfolios, because international collaborations tend to accrue additional citations.
- The authors warn that citation-based evaluation can worsen disparities when impact measures inherit these gendered collaboration and authorship-position differences.
- That warning is split out as [citation-evaluation disparity feedback](citation_evaluation_disparity_feedback.md).

## Caveats

- The result is descriptive and cannot by itself separate bias, field composition, seniority, collaboration access, author-order conventions, and selection effects.
- Seniority may be a major confound because author position, collaboration, and citation impact are linked to career stage.
- This caveat is split out as [gendered seniority-pipeline confound](../validations/gendered_seniority_pipeline_confound.md).
- The analysis uses inferred binary gender and WoS-indexed articles and reviews, so coverage limitations matter.
- Normalized citation impact reduces field and year differences but does not remove all evaluation bias.

## Links

- [gender and race stratification](gender_race_stratification.md)
- [gendered collaboration rate](../measures/gendered_collaboration_rate.md)
- [gendered fractional authorship ratio](../measures/gendered_fractional_authorship_ratio.md)
- [gendered author-position gap](../measures/gendered_author_position_gap.md)
- [gender-author-role citation heatmap](../representations/gender_author_role_citation_heatmap.md)
- [citation-evaluation disparity feedback](citation_evaluation_disparity_feedback.md)
- [gendered seniority-pipeline confound](../validations/gendered_seniority_pipeline_confound.md)
- [field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [WoS global gender bibliometric panel](../datasets/wos_global_gender_bibliometric_panel.md)
- [given-name gender assignment](../methods/given_name_gender_assignment.md)
- [attention inequality](attention_inequality.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Lariviere, V., Ni, C., Gingras, Y., Cronin, B., & Sugimoto, C. R. (2013). Bibliometrics: Global gender disparities in science. *Nature*, 504, 211-213. https://doi.org/10.1038/504211a [OpenAlex: W2050990045; Dimensions: pub.1050929337; WoS: unknown]

## Metadata

- Concept ID: `lead_author_gender_citation_gap`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Lariviere et al. (2013) (2013)
- Latest seen paper: Lariviere et al. (2013) (2013)
- Primary reference DOI: `10.1038/504211a`
- OpenAlex ID: `W2050990045`
- Dimensions ID: `pub.1050929337`
- SciSciNet ID: `W2050990045`
- Aliases: gendered citation impact gap; female lead-author citation disadvantage; author-position citation gap; gendered citation recognition
