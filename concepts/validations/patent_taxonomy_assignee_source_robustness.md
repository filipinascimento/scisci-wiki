# Patent taxonomy-assignee-source robustness

## Summary

Patent taxonomy-assignee-source robustness checks whether patent trend results survive alternative technology taxonomies, domestic or foreign source splits, and assignee-code research environments.

## Canonical Form

- Unit of analysis: patent, technology class, source country, assignee type, team-size trend, specialization trend, or age trend.
- Typical representation: robustness table across USPTO classes, Hall categories, domestic/foreign panels, and assignee codes.
- Validation target: ensure patent-based science-of-science patterns are not artifacts of classification or ownership composition.
- Empirical signature: focal trends remain positive or stable across taxonomy, source, and assignee partitions.

## Uses in Science of Science

- Validates [age at first invention](../measures/age_at_first_invention.md), [patent field-jump specialization](../measures/patent_field_jump_specialization.md), and [knowledge-depth team-size gradient](knowledge_depth_team_size_gradient.md).
- Helps interpret [burden of knowledge](../mechanisms/burden_of_knowledge.md) as a broad pattern rather than a single technology-class artifact.
- Provides a reusable audit for patent panels that mix corporate, university, government, domestic, and foreign invention sources.

## Operationalization

- Re-estimate trends under multiple technology classifications, such as broad categories, intermediate categories, and fine patent classes.
- Split or control for domestic and foreign patent sources.
- Use assignee codes or ownership categories to distinguish research environments.
- Report whether the trend direction and magnitude survive these design choices.

## Evidence and Validations

- Verified full-text evidence from Jones (2009) reports that team-size trends remain positive across technology-category definitions.
- Jones checks domestic and foreign patent sources and notes that team size rises substantially in both, though the domestic trend is steeper.
- The paper also uses assignee-code controls to show that the trend is not limited to a single patent-owning environment.

## Caveats

- Assignee-code categories may be coarse and historically inconsistent.
- Technology-taxonomy robustness does not remove all changes in patenting incentives or legal regimes.
- Foreign/domestic splits can mix inventor location, assignee location, and market-filing strategy.

## Links

- [age at first invention](../measures/age_at_first_invention.md)
- [patent field-jump specialization](../measures/patent_field_jump_specialization.md)
- [knowledge-depth team-size gradient](knowledge_depth_team_size_gradient.md)
- [patent application-year time anchor](../methods/patent_application_year_time_anchor.md)
- [NBER utility-patent microdata backbone](../datasets/nber_utility_patent_microdata_backbone.md)
- [burden of knowledge](../mechanisms/burden_of_knowledge.md)

## References

- Jones, B. F. (2009). The burden of knowledge and the Death of the Renaissance Man: Is innovation getting harder? *The Review of Economic Studies*, 76(1), 283-317. https://doi.org/10.1111/j.1467-937x.2008.00531.x [OpenAlex: W3124253902; Dimensions: pub.1061936767; SciSciNet: W3124253902; WoS: unknown]

## Metadata

- Concept ID: `patent_taxonomy_assignee_source_robustness`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Jones (2009) (2009)
- Latest seen paper: Jones (2009) (2009)
- Primary reference DOI: `10.1111/j.1467-937x.2008.00531.x`
- OpenAlex ID: `W3124253902`
- Dimensions ID: `pub.1061936767`
- SciSciNet ID: `W3124253902`
- Aliases: patent taxonomy robustness; assignee-code robustness; domestic foreign patent robustness; patent source trend audit
