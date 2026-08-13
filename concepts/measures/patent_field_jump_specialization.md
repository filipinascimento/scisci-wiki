# Patent field-jump specialization

## Summary

Patent field-jump specialization measures how often an inventor switches technology fields between consecutive patent applications, using lower switching probability as evidence of narrower expertise.

## Canonical Form

- Unit of analysis: inventor, consecutive patent pair, technology class, application-year window, or solo-inventor career segment.
- Typical representation: probability of switching USPTO class, 6-category field, 36-category field, or 414 main class between adjacent patents.
- Measurement target: inventor specialization inferred from observed movement across technological areas.
- Empirical signature: declining field-jump probability indicates increasing specialization, especially when measured among solo inventors.

## Uses in Science of Science

- Provides a patent-career measure for [burden of knowledge](../mechanisms/burden_of_knowledge.md).
- Complements [knowledge depth citation trees](knowledge_depth_citation_trees.md) by showing whether deeper prior-art structures correspond to narrower inventor movement.
- Connects career-level specialization to [task specialization](../mechanisms/task_specialization.md) and [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md), while keeping the measurement anchored in inventor sequences rather than contribution roles or reference lists.
- Depends on [patent application-year time anchor](../methods/patent_application_year_time_anchor.md) and [inventor application time lag](inventor_application_time_lag.md) when correcting truncation in consecutive-patent panels.

## Operationalization

- Build inventor patent histories and order patents by application date.
- Define adjacent patent pairs and mark whether the technology category changes between the first and second application.
- Restrict to solo inventors when team patent categories make an individual inventor's expertise ambiguous.
- Use a fixed observation window for consecutive applications, such as requiring the second application within three years, to reduce right-truncation bias.
- Test robustness to alternative field definitions, including broad 6-category classes, 36-category classes, and fine 414-class measures.

## Evidence and Validations

- Verified full-text evidence from Jones (2009) defines field jump as the probability that an innovator switches technological areas between consecutive patent applications.
- Jones treats lower field-jump probability as a proxy for greater specialization, because more specialized inventors should be less capable of switching fields.
- The paper focuses specialization analysis on solo inventors, since team patents make it ambiguous which field belongs to which individual.
- Jones reports a smooth decline in field-jump probability from 1975 to 1993, with a central estimate interpreted as about a 6 percent increase in specialization per decade.
- The trend is robust across 6-, 36-, and 414-category technology definitions and survives controls for application time lag, ownership status, domestic or foreign source, and initial technology class.

## Caveats

- Field jumps depend on the chosen patent classification system and category granularity.
- A lower jump probability can reflect field opportunity, labor-market constraints, team assignment, or patenting strategy as well as deeper expertise.
- Team patents are difficult to interpret because the patent category is assigned to the output rather than to each inventor's individual expertise.
- Truncated patent windows can mechanically lower observed field-jump probability near the end of the data.

## Links

- [burden of knowledge](../mechanisms/burden_of_knowledge.md)
- [knowledge depth citation trees](knowledge_depth_citation_trees.md)
- [knowledge-depth specialization gradient](../validations/knowledge_depth_specialization_gradient.md)
- [inventor application time lag](inventor_application_time_lag.md)
- [patent application-year time anchor](../methods/patent_application_year_time_anchor.md)
- [age at first invention](age_at_first_invention.md)
- [mean team-size growth](mean_team_size_growth.md)
- [task specialization](../mechanisms/task_specialization.md)
- [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md)

## References

- Jones, B. F. (2009). The burden of knowledge and the Death of the Renaissance Man: Is innovation getting harder? *The Review of Economic Studies*, 76(1), 283-317. https://doi.org/10.1111/j.1467-937x.2008.00531.x [OpenAlex: W3124253902; Dimensions: pub.1061936767; WoS: unknown]

## Metadata

- Concept ID: `patent_field_jump_specialization`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Jones (2009) (2009)
- Latest seen paper: Jones (2009) (2009)
- Primary reference DOI: `10.1111/j.1467-937x.2008.00531.x`
- OpenAlex ID: `W3124253902`
- Dimensions ID: `pub.1061936767`
- SciSciNet ID: `W3124253902`
- Aliases: field-jump probability; inventor field switching; patent specialization proxy; solo-inventor switching rate
