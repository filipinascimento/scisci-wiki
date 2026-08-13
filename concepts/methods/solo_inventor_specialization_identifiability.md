# Solo-inventor specialization identifiability

## Summary

Solo-inventor specialization identifiability restricts field-switching specialization measures to solo inventors when patent-level technology categories cannot be assigned cleanly to individual members of a team.

## Canonical Form

- Unit of analysis: solo inventor, team inventor, patent pair, technology category, or specialization estimate.
- Typical representation: sample restriction, solo-inventor robustness design, or team-patent interpretability caveat.
- Method target: ensure that field-jump behavior can be interpreted as individual expertise movement.
- Empirical signature: field-switching estimates are calculated on patents where the same individual is the only inventor.

## Uses in Science of Science

- Provides the identification rule behind [patent field-jump specialization](../measures/patent_field_jump_specialization.md).
- Supports [knowledge-depth specialization gradient](../validations/knowledge_depth_specialization_gradient.md) by reducing ambiguity in individual specialization measures.
- Helps separate individual specialization from team-level division of labor in [burden of knowledge](../mechanisms/burden_of_knowledge.md) studies.

## Operationalization

- Build sequential patent histories for inventors.
- Identify adjacent patent applications and their technology categories.
- Restrict the field-jump analysis to inventors whose relevant patents are solo-authored or solo-invented.
- Treat team-patent field switches as ambiguous unless contribution-level or role-level data can assign expertise to individuals.
- Report how much of the sample is excluded by the solo-inventor restriction.

## Evidence and Validations

- Verified full-text evidence from Jones (2009) states that patent categories are assigned to patents rather than to individual inventors.
- Jones argues that, when inventors work in teams, the relation between field jumps and each individual's specialization is ambiguous.
- The paper therefore focuses the specialization analysis on solo inventors, where lower field-jump probability more directly reflects individual specialization.

## Caveats

- Solo inventors may differ systematically from team inventors in field, age, productivity, or institutional setting.
- Restricting to solo patents improves interpretation but narrows the target population.
- Team-level specialization can still be important and requires separate role or contribution data.

## Links

- [patent field-jump specialization](../measures/patent_field_jump_specialization.md)
- [knowledge-depth specialization gradient](../validations/knowledge_depth_specialization_gradient.md)
- [inventor application time lag](../measures/inventor_application_time_lag.md)
- [burden of knowledge](../mechanisms/burden_of_knowledge.md)
- [task specialization](../mechanisms/task_specialization.md)

## References

- Jones, B. F. (2009). The burden of knowledge and the Death of the Renaissance Man: Is innovation getting harder? *The Review of Economic Studies*, 76(1), 283-317. https://doi.org/10.1111/j.1467-937x.2008.00531.x [OpenAlex: W3124253902; Dimensions: pub.1061936767; SciSciNet: W3124253902; WoS: unknown]

## Metadata

- Concept ID: `solo_inventor_specialization_identifiability`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Jones (2009) (2009)
- Latest seen paper: Jones (2009) (2009)
- Primary reference DOI: `10.1111/j.1467-937x.2008.00531.x`
- OpenAlex ID: `W3124253902`
- Dimensions ID: `pub.1061936767`
- SciSciNet ID: `W3124253902`
- Aliases: solo-inventor restriction; individual specialization identifiability; team-patent field ambiguity; solo patent field-switch design
