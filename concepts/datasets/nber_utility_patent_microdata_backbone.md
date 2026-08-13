# NBER utility-patent microdata backbone

## Summary

NBER utility-patent microdata backbone is the Hall-Jaffe-Trajtenberg USPTO patent corpus used to link patent applications, technology classes, citations, inventor names, and inventor addresses into longitudinal innovation panels.

## Canonical Form

- Unit of analysis: utility patent, inventor, patent citation, technology class, application year, grant year, assignee, or inventor address.
- Typical representation: patent-level table with inventor and citation joins, plus derived inventor-history panels.
- Dataset target: provide patent microdata for measuring innovation timing, specialization, team size, and knowledge depth.
- Empirical signature: post-1975 patent citations and inventor identifiers allow sequential inventor histories and citation-tree measures.

## Uses in Science of Science

- Supplies the data backbone for [burden of knowledge](../mechanisms/burden_of_knowledge.md) in inventor and patent settings.
- Enables [patent application-year time anchor](../methods/patent_application_year_time_anchor.md), [inventor application time lag](../measures/inventor_application_time_lag.md), [knowledge depth citation trees](../measures/knowledge_depth_citation_trees.md), and [patent field-jump specialization](../measures/patent_field_jump_specialization.md).
- Connects patent-based science-of-science measures to broader innovation studies and patent-science linkage work.

## Operationalization

- Start from the USPTO utility-patent corpus assembled by Hall, Jaffe, and Trajtenberg.
- Use application year for timing when the behavior of inventors precedes patent grant.
- Use post-1975 backward citations to construct knowledge-depth and prior-art measures.
- Use inventor names and addresses to build inventor histories, recognizing that name matching is not full author disambiguation.
- Join birthdate or other external data only through auditable panels such as [inventor birthdate matching panel](inventor_birthdate_matching_panel.md).

## Evidence and Validations

- Verified full-text evidence from Jones (2009) states that the empirical analysis uses the Hall, Jaffe, and Trajtenberg patent dataset.
- Jones describes the corpus as containing all USPTO utility patents, with post-1975 citation data and inventor names and addresses used to build patent histories.
- The same full text uses the dataset to define team size, application time lag, patent citation-tree depth, and field-jump specialization.

## Caveats

- The corpus covers patented inventions and misses non-patented knowledge production.
- Citation fields are available only after the relevant historical cutoff, shaping cross-sectional and time-series designs.
- Inventor names and addresses can create ambiguity unless matching assumptions are documented.

## Links

- [burden of knowledge](../mechanisms/burden_of_knowledge.md)
- [patent application-year time anchor](../methods/patent_application_year_time_anchor.md)
- [inventor application time lag](../measures/inventor_application_time_lag.md)
- [knowledge depth citation trees](../measures/knowledge_depth_citation_trees.md)
- [patent field-jump specialization](../measures/patent_field_jump_specialization.md)
- [inventor birthdate matching panel](inventor_birthdate_matching_panel.md)
- [patent paper links](patent_paper_links.md)

## References

- Jones, B. F. (2009). The burden of knowledge and the Death of the Renaissance Man: Is innovation getting harder? *The Review of Economic Studies*, 76(1), 283-317. https://doi.org/10.1111/j.1467-937x.2008.00531.x [OpenAlex: W3124253902; Dimensions: pub.1061936767; SciSciNet: W3124253902; WoS: unknown]

## Metadata

- Concept ID: `nber_utility_patent_microdata_backbone`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Jones (2009) (2009)
- Latest seen paper: Jones (2009) (2009)
- Primary reference DOI: `10.1111/j.1467-937x.2008.00531.x`
- OpenAlex ID: `W3124253902`
- Dimensions ID: `pub.1061936767`
- SciSciNet ID: `W3124253902`
- Aliases: Hall-Jaffe-Trajtenberg patent data; NBER patent data; USPTO utility-patent corpus; patent microdata backbone
