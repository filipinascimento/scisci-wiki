# Age at first invention

## Summary

Age at first invention measures when inventors first appear in patent data, using entry into inventive output as a proxy for training length and frontier-entry burden.

## Canonical Form

- Unit of analysis: inventor, first patent, technology class, birth cohort, application year, or patent ownership class.
- Typical representation: age at first observed patent, decade trend, cohort-adjusted entry age, or technology-specific entry-age trend.
- Measurement target: the transition from pre-innovation training to active inventive production.
- Empirical signature: rising first-invention age suggests longer preparation before frontier contribution.

## Uses in Science of Science

- Provides a career-entry outcome for [burden of knowledge](../mechanisms/burden_of_knowledge.md).
- Complements team-size and specialization measures as indicators of how accumulated knowledge changes the organization of innovation.
- Links innovation studies to [scientific career impact](../mechanisms/scientific_career_impact.md), early-career access, and training-length debates.
- Helps distinguish time-trend burden from cross-sectional [knowledge depth citation trees](knowledge_depth_citation_trees.md).

## Operationalization

- Identify inventors across patents and locate the first patent application observed for each inventor.
- Estimate age at that first observed invention using birth-date sources, [inventor birthdate matching panels](../datasets/inventor_birthdate_matching_panel.md), or other age proxies.
- Restrict to windows where first observed invention is plausibly first actual invention, especially when patent history is left-truncated.
- Control for technology class, team size, ownership type, domestic/foreign source, and age-window definitions.
- Report selection caveats when birth-date matching covers only a subset of inventors.
- Use [inventor application time lag](inventor_application_time_lag.md) checks when first-invention age could be contaminated by changing gaps between education and first patent output.

## Evidence and Validations

- Verified full-text evidence from Jones (2009) lists age at first innovation as one of three empirical outcomes, alongside team size and specialization.
- Jones constructs an age subset by matching inventor names and ZIP codes to public birth-date records and then restricts the analysis to inventors first observed after 1985 and between ages 25 and 35.
- Jones reports 56,281 unique birth-date matches among 224,152 inventors with ZIP-code information, while warning that the matched age subset is not random.
- The paper reports that age at first invention rises by about 0.66 years per decade and that the trend persists after controlling for technology field and team size.
- Jones interprets age at first invention as an outcome-based measure of the boundary between education and active innovation, while noting that the age subset is not a random sample.
- In cross-section, Jones finds only weak links between citation-tree depth and age at first innovation, so this measure captures time-trend burden more clearly than field-depth variation.

## Caveats

- First observed patent can differ from true first invention because of database left truncation, name disambiguation errors, unpatented work, or patents filed under different names.
- Birth-date matching can introduce selection bias.
- Later first invention can reflect education, credentialing, labor-market institutions, team assignment, or patenting practices, not only knowledge burden.

## Links

- [burden of knowledge](../mechanisms/burden_of_knowledge.md)
- [knowledge depth citation trees](knowledge_depth_citation_trees.md)
- [inventor birthdate matching panel](../datasets/inventor_birthdate_matching_panel.md)
- [inventor application time lag](inventor_application_time_lag.md)
- [patent field-jump specialization](patent_field_jump_specialization.md)
- [education-specialization substitution](../mechanisms/education_specialization_substitution.md)
- [task specialization](../mechanisms/task_specialization.md)
- [team impact advantage](../mechanisms/team_impact_advantage.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [scientific career impact](../mechanisms/scientific_career_impact.md)
- [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md)

## References

- Jones, B. F. (2009). The burden of knowledge and the Death of the Renaissance Man: Is innovation getting harder? *The Review of Economic Studies*, 76(1), 283-317. https://doi.org/10.1111/j.1467-937x.2008.00531.x [OpenAlex: W3124253902; Dimensions: pub.1061936767; WoS: unknown]

## Metadata

- Concept ID: `age_at_first_invention`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Jones (2009) (2009)
- Latest seen paper: Jones (2009) (2009)
- Primary reference DOI: `10.1111/j.1467-937x.2008.00531.x`
- OpenAlex ID: `W3124253902`
- Dimensions ID: `pub.1061936767`
- SciSciNet ID: `W3124253902`
- Aliases: age at first innovation; inventor entry age; frontier-entry age; innovation training length
