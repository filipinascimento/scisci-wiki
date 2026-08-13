# Independent-author credit comparison

## Summary

Independent-author credit comparison extends credit-allocation logic from coauthors on one paper to researchers who work on the same topic but have not necessarily published together.

## Canonical Form

- Unit of analysis: author, topic, author oeuvre, citing paper, co-citation neighborhood, or discovery contender set.
- Typical representation: credit-share vector over independent authors based on papers that cite work by multiple compared authors.
- Method target: infer relative community credit for a shared topic or discovery outside a single coauthored paper.
- Empirical signature: independent authors' credit shares rank perceived contribution to a common topic.

## Uses in Science of Science

- Generalizes [collective credit allocation](../measures/collective_credit_allocation.md) beyond coauthor teams.
- Provides a way to compare discovery contenders in [Nobel-prize credit validation](../validations/nobel_prize_credit_validation.md) when recognition is capacity constrained.
- Connects [co-citation credit attribution](co_citation_credit_attribution.md) to topic-level credit rather than paper-level credit only.
- Helps analyze [fixed-slot award exclusion](../mechanisms/fixed_slot_award_exclusion.md), where external awards cannot recognize all contributors.

## Operationalization

- Define a set of authors to compare within a common research topic.
- Identify citing papers that cite at least one paper by each compared author or cite papers spanning the compared authors' oeuvres.
- Use the resulting co-citation strengths to infer each author's relative contribution to the topic.
- Compare rankings across databases, time windows, and historically documented recognition events.

## Evidence and Validations

- Verified full-text evidence from Shen and Barabasi (2014) states that the method can compare authors in the same research field even if they have not published together.
- The paper bases co-citation strength on citing papers that simultaneously cite at least one paper by each compared author, thereby identifying a common research topic.
- Shen and Barabasi apply this to the 2013 Nobel Prize in Physics and the six physicists associated with Higgs-boson theory.
- The full text reports that the method ranks Higgs first, then Kibble, with Englert third and slightly ahead of Brout, while Guralnik and Hagen share the remaining credit.

## Caveats

- The author set must be defined carefully; excluding a contender can alter interpretation.
- Topic boundaries inferred from co-citation can favor better-indexed or more-canonical papers.
- Credit comparison among independent authors is still perceived-credit measurement, not a full historical adjudication.

## Links

- [collective credit allocation](../measures/collective_credit_allocation.md)
- [co-citation credit attribution](co_citation_credit_attribution.md)
- [focal-paper co-citation network](../representations/focal_paper_co_citation_network.md)
- [Nobel-prize credit validation](../validations/nobel_prize_credit_validation.md)
- [fixed-slot award exclusion](../mechanisms/fixed_slot_award_exclusion.md)
- [APS-WoS credit robustness](../validations/aps_wos_credit_robustness.md)

## References

- Shen, H.-W., & Barabasi, A.-L. (2014). Collective credit allocation in science. *Proceedings of the National Academy of Sciences*, 111(34), 12325-12330. https://doi.org/10.1073/pnas.1401992111 [OpenAlex: W2037997493; Dimensions: pub.1014325139; WoS: unknown]

## Metadata

- Concept ID: `independent_author_credit_comparison`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Shen and Barabasi (2014) (2014)
- Latest seen paper: Shen and Barabasi (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1401992111`
- OpenAlex ID: `W2037997493`
- Dimensions ID: `pub.1014325139`
- SciSciNet ID: `W2037997493`
- Aliases: topic-level credit comparison; independent contender credit; same-topic author credit; discovery contender credit ranking
